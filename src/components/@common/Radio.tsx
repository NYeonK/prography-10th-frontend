import clsx from "clsx";

interface Props {
  checked: boolean | null;
  label: string;
  onChange: () => void;
}

const Radio = ({ checked, label, onChange }: Props) => {
  return (
    <div
      onClick={onChange}
      className="flex items-center gap-2 py-5 px-4 border border-gray-200 rounded-lg cursor-pointer"
    >
      <div
        className={clsx(
          "w-5 h-5 flex items-center justify-center rounded-full border",
          checked ? "border-blue-500" : "border-gray-500"
        )}
      >
        {checked && <div className="w-3 h-3 rounded-full bg-blue-500" />}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Radio;
