const FilterItem = (props) => {
  const { name, options } = props;
  return (
    <div className="flex flex-col flex-1 px-6">
      <div className="text-xl text-gray-400"><strong>{name}</strong></div>
    </div>
  );
};

export default FilterItem;
