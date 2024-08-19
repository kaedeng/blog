import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen text-[#cdd6f4]">
      <div className="m-auto text-center">
        <h1 className="text-[25pt] font-semibold p-6">Oops!</h1>
        <p className="text-[20pt]">Sorry, an unexpected error has occurred.</p>
        <p className="p-6">
          <i className="text-[20pt] font-light">
            Error: {(error as any).statusText || (error as Error).message}
          </i>
        </p>
      </div>
    </div>
  );
}
