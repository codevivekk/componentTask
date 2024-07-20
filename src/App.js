import { useState } from "react";
import "./App.css";
import Button from "./component/Button/Button";
import CheckBox from "./component/Checkbox/CheckBox";
import { buttonClasses, checkboxClasses } from "./constant";

function App() {
  const [isChecked, setIsChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleCheckAll = (e) => {
    const isAllChecked = !Object.values(isChecked).every((ele) => ele);
    setIsChecked({
      1: isAllChecked,
      2: isAllChecked,
      3: isAllChecked,
      4: isAllChecked,
    });
  };

  const handleCheck = (ele) => {
    setIsChecked((prev) => ({ ...prev, [ele]: !isChecked[ele] }));
  };
  return (
    <main>
      <div className="btn-component flex flex-col gap-[10px]  items-center">
        <h1 className="text-3xl font-semibold my-5">Button Component</h1>
        {buttonClasses?.map((ele, i) => (
          <Button btnStyle={ele} key={i} />
        ))}
      </div>

      <div className="checkbox-component flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-5">Checkbox Component</h1>
        {checkboxClasses?.map((ele, i) => (
          <CheckBox checkboxStyle={ele + " mb-4"} key={i} />
        ))}
      </div>

      <div className="checkbox-component flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-5">
          All Pages checkbox Component
        </h1>
        {checkboxClasses?.map((ele, i) => (
          <CheckBox
            checkboxStyle={ele}
            key={i}
            label="All Pages"
            divStyles="w-[370px] border h-[42px] mb-4 p-4 bg-white flex items-center justify-between"
          />
        ))}
      </div>

      <div className="checkbox-component mb-10  flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-5">All Pages Component</h1>
        <div className="border w-1/3 shadow-shadow1 rounded-lg flex justify-center bg-[#ffffff] py-5 flex-col items-center">
          <CheckBox
            handleCheck={handleCheckAll}
            checkboxStyle="custom-checkbox-light-white checkbox-tick-grey"
            label={`All Pages`}
            divStyles="w-[370px] border h-[42px] mb-4 p-4 bg-white flex items-center justify-between"
          />

          <div className="h-[1px] mb-3 bg-[#CDCDCD] w-3/4" />

          {[1, 2, 3, 4]?.map((ele, i) => (
            <CheckBox
              checkboxStyle="custom-checkbox-light-white checkbox-tick-grey"
              key={i}
              handleCheck={() => handleCheck(ele)}
              isChecked={isChecked[ele]}
              label={`Page ${ele}`}
              divStyles="w-[370px]  h-[42px] mb-4 p-4 bg-white flex items-center justify-between"
            />
          ))}
          <div className="h-[1px] mb-3 bg-[#CDCDCD] w-3/4" />
          <Button btnStyle="bg-[#FFCE22] w-[370px]" />
        </div>
      </div>
    </main>
  );
}

export default App;
