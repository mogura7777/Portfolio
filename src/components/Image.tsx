/** @format */
type Props = {
  fname: string;
  size?: number;
};
export default function MyImage(props: Props) {
  let fname = "./" + props.fname;
  let size = props.size + "px";
  return <img width={size} src={fname} />;
}
