import { useRef } from "react";
import { useState } from "react";
export function OTP() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

    const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex justify-center">
      <Box ref={ref1} 
        onDone={() => {
          ref2.current.focus();
        }}
        onBackspace={() => {
            ref1.current.focus();
            }
        }
      />
      <Box ref={ref2}
        onDone={() => {
          ref3.current.focus();
        }}
        onBackspace={() => {
            ref1.current.focus();
            }
        }
      />
      <Box ref={ref3}
        onDone={() => {
          ref4.current.focus();
        }}
        onBackspace={() => {
            ref2.current.focus();
            }
        }
      />
      <Box ref={ref4}
        onDone={() => {
          ref4.current.focus();
        }}
        onBackspace={() => {
            ref3.current.focus();
            }
        }
      />

        <button 
            onClick={() => {
                setDisabled(!disabled);

            }}
            className="bg-blue-500 text-white p-2 rounded-xl m-2"
        >
            {disabled ? "Enable" : "Disable"}
        </button>
    </div>

  );
}

function Box({ref, onDone}) {
    const [value, setValue] = useState("");
  return (
    <div>
      <input value={value} ref={ref} onChange={(e) => {
        //Only digits for otp
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setValue(e.target.value);
            if(e.target.value.length === 1){
                onDone();
            }
        }
        }}
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-0 px-4"
      />
    </div>
  );
}
