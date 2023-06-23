interface ScaleProps {
    scale: string[];
}

function Scale(props: ScaleProps) {
  return (
    <div className="scale">
      <span>Scale: { props.scale } </span>
    </div>
  );
}

export default Scale;