export function MainContainer() {
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 flex flex-wrap items-center justify-center">
        <div className="w-full max-w-[800px] h-[500px] m-4 relative">
          {/* bg 1 */}
          <div
            data-title="bg-1"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex">
              <div className="w-[270px] flex-shrink-0 flex-grow-0 bg-color-1 rounded-xl"></div>
              <div className="min-w-0 w-full bg-color-1 rounded-xl"></div>
            </div>
          </div>

          {/* bg 2 */}
          <div
            data-title="bg-2"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full box-border p-6">
              <div className="w-full h-full border border-dashed border-color-2 rounded-xl"></div>
            </div>
          </div>

          {/* bg 3 */}
          <div
            data-title="bg-3"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex box-border p-8">
              <div className="w-[238px] flex-shrink-0 flex-grow-0 bg-color-2 rounded-xl"></div>
              <div className="min-w-0 w-full bg-color-2 rounded-xl relative">
                <div className="w-full h-full bg-color-3/5" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="w-full h-full relative box-border p-10">
            <div className="w-full h-full bg-blue-500/50"></div>
          </div>
        </div>
      </div>
    </>
  );
}
