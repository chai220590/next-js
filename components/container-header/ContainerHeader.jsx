function ContainerHeader({ title, right = <></> }) {
  return (
    <div className="flex justify-between items-center my-2">
      <div className="text-2xl font-bold">{title}</div>
      {right}
    </div>
  );
}

export default ContainerHeader;
