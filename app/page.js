import Link from "next/link";

export default function Home() {
  let name = "park";

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>애플 후레시</h1>
            <p>by dev {name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
