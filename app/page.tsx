import Company from "@/pages/Company";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <h5>Họ và tên: Nguyễn Văn A</h5>
      <Company />
      <Button />
      <h5>danh sách các icon</h5>
      <ul>
        <li>
          <span className="material-symbols-outlined">local_cafe</span>
        </li>
        <li>
          <span className="material-symbols-outlined">visibility</span>
        </li>
        <li>
          <span className="material-symbols-outlined">save</span>
        </li>
      </ul>
    </>
  );
}
