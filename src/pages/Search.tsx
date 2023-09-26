import PageHeader from "../components/PageHeader";

function Search() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <PageHeader opacity={""} />
      </div>
    </div>
  );
}

export default Search;
