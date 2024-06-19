import React from "react";

export default function HomePage(props) {
  const { setAudioStream, setFile } = props;
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:tex-6xl md:text-7x1">
        Free<span className="text-green-400 bold">Scribe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record<span className="text-green-400">&rarr;</span>Transcribe
        <span className="text-green-400">&rarr;</span>Translate
      </h3>
      <button className="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4">
        <p className="text-green-400 bold">Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
      <p className="text-base">
        {" "}
        Or{" "}
        <label className="text-green-400 cursor-pointer hover:text-green-600 duration-200">
          upload{" "}
          <input
            onChange={(e) => {
              const tempFile = e.target.files(0);
              setFile(tempFile);
            }}
            className="hidden"
            type="file"
            accept=".mp3,.wave"
          />
        </label>
        a mp3 file(audio)
      </p>
      <p className="italic text-slate-500">Free now free forever</p>
    </main>
  );
}
