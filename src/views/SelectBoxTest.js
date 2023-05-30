import React, {  useState, useRef } from 'react';
import Select from "react-select";

const SelectBoxTest = () => { 
    /* 이 부분은 추가 확인 필요 */
   
    //셀렉트 박스 테스트 2
    const limitSelectList = ["5", "10", "15", "20"]; 
    const [posts, setPosts] = useState([]);
    const [Selected, setSelected] = useState("10");   
    const handledSelect = (e) => { 
        setSelected(e.target.value); //select:onChange의 선택된 option의 value 값을 e.target.value 로 받은 후 setSelected 
    }

    // 셀렉트 박스 테스트 3 : 커스텀 컴포넌트 정의
    const limitSelectOpions = [
        { value: "apple", name: "사과" },
        { value: "banana", name: "바나나" },
        { value: "orange", name: "오렌지" },
    ];
    const SelectBox = (props) => {
        const handleChange = (e) => {
            // event handler
            console.log(e.target.value);
        }; 
        return (
            <select onChange={handleChange}>
                {props.options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };
    // 셀렉트박스 테스트 4
    const online = [
         { value: "5", label: "5개" },
         { value: "10", label: "10개" },
         { value: "15", label: "15개" },
         { value: "20", label: "20개" },
        ]   
    const [selectOnline, setSelectOnline] = useState(online[0]); //안에 들어가는 값을 받아야해서 state사용
        
    // 셀렉트박스 테스트 5
    let options = [
        { value: "바나나", label: "바나나" },
        { value: "사과", label: "사과" },
        { value: "딸기", label: "딸기" },
    ];
    const [selectValue, setSelectValue] = useState('')
    const selectInputRef = useRef(null);

    const onClearSelect = () => {
        if (selectInputRef.current) {
        	selectInputRef.current.clearValue();
        }
    }
 
    
    return (
        <section>
           
            셀렉트 박스 테스트 1 : 
            <select defaultValue={'15'}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>                
            </select> <hr/>         
            셀렉트 박스 테스트 2 : 
            <select onChange={handledSelect} value={Selected}>
                {limitSelectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select> Selected: <b>{Selected} </b>  
            <hr/>
            셀렉트 박스 테스트 3 :         
            <SelectBox options={limitSelectOpions} defaultValue="banana"></SelectBox> 
            <hr/>
            셀렉트 박스 테스트 4 : 
            <Select options={online}  
                    onChange={setSelectOnline}  
                    defaultValue={online[0]} />  
            <hr/>
            셀렉트 박스 테스트 5 : 
            <Select
                ref={selectInputRef}
                onChange={(e) => {
                    if (e) {
                    	setSelectValue(e.value);
                    } else {
                    	setSelectValue("");
                    }
                }}
                options={options}
                placeholder="뚝딱을 선택하세요."
            />
            <button onClick={() => onClearSelect()}>
            초기화
            </button>	
            - 입력할수 없고 초기값이 20으로 선택되도록 수정필요
          
        </section>
    );
};
export default SelectBoxTest;
