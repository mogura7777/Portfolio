/** @format */
type Props = {
  fname?: string;
  fulname?: string;
  size?: number;
};
export default function MyImage(props: Props) {
  let fname = "./" + props.fname;
  let fulname = props.fulname;
  let size = props.size + "px";
  return <img width={size} src={props.fname ? fname : fulname} />;
}
