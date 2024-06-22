import { quotes } from "../assets";

export default function FeedbackCard({ content, name, title, img }) {
  return (
    <div>
      <img src={quotes} alt="double_quotes" className="" />
      <p>{content}</p>

      <div>
        <img src={img} alt="name" />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
