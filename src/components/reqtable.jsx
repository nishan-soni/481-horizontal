import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useData } from "../DataProvider";
import CompletionCard from "./completioncard";
import { Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Tooltip from "@mui/material/Tooltip";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(row.completion !== "complete");

  return (
    <>
      <TableRow
        className=" bg-stone-50"
        onClick={() => {
          setOpen(!open);
        }}
        hover
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <strong>{row.name}</strong>
        </TableCell>
        <TableCell align="center">
          <CompletionCard decider={row.completion} />
        </TableCell>
        <TableCell align="center">
          {row.credits} / {row.outof}
        </TableCell>
      </TableRow>
      <TableRow className=" border-none shadow-inner bg-white">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><strong>Prerequisites</strong></TableCell>
                    <TableCell align="center">
                      <strong>Course</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Semester</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Grade</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Credits</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Status</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row["courses"].map((courseRow) => (
                    <TableRow key={courseRow.course}>
                      <TableCell
                        sx={{ borderBottom: "none" }}
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {!courseRow.reqsSatisfied ? (
                          <Tooltip
                            title={
                              <div className="text-base">
                                You are missing the following pre-requisites to
                                take this course:
                                {courseRow.reqs.map((item, index) => {
                                  return (
                                    <div key={index} className="ml-2">
                                      - {item}
                                    </div>
                                  );
                                })}
                              </div>
                            }
                          >
                            <FeedbackOutlinedIcon
                              fontSize="medium"
                              className="text-red-500"
                            />
                          </Tooltip>
                        ) : (
                          <Tooltip
                            title={
                              <div className="text-base">
                                You have fulfilled the requirements to take this
                                course.
                              </div>
                            }
                          >
                            <CheckCircleOutlinedIcon
                              fontSize="medium"
                              className=" text-green-500"
                            />
                          </Tooltip>
                        )}
                      </TableCell>

                      <TableCell
                        sx={{ borderBottom: "none" }}
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <div className="flex flex-row justify-center items-center">
                          {courseRow.course}
                        </div>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }} align="center">
                        {courseRow.sem}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }} align="center">
                        {courseRow.grade}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }} align="center">
                        {courseRow.credits}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }} align="center">
                        <CompletionCard decider={courseRow.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function ReqTable(props) {
  const { data } = props;

  return (
    <>
      <div className="border-2 rounded-xl p-4 mb-2 bg-white shadow-sm">
        <Typography fontSize={18}>
          <strong>{data.reqtitle}</strong>
        </Typography>
      </div>
      <TableContainer className="bg-white border-2 rounded-xl">
        <Table aria-label="collapsible table">
          <TableHead className="bg-white">
            <TableRow>
              <TableCell />
              <TableCell>
                <strong>Requirement</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Completion</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Credits Acheived</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="">
            {data["reqs"].map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ReqTable;
