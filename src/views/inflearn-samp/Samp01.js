
import React, { useState } from "react";

const Samp01 = () => {
    
    const [first, setFirst] = React.useState(Math.ceil(Math.random() *9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() *9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputEl = React.useRef(null);     // 특정 DOM을 선택 (getElementById, querySelector)

    const onSubmitForm = (e) => {
        e.preventDefault(); // 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정

        if(parseInt(value) === first * second) {
            setResult('정답! ('+first+'*'+second+' = '+parseInt(value)+')');
            
            // 재계산
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random() *9));
            setValue('');
            inputEl.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputEl.current.focus();
        }

    } 

    return (
        <React.Fragment>
            <h5>구구단</h5>
            <div>{first} * {second} = ? </div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></input>
                <button>입력하기</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    )
}
export default Samp01;