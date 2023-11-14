import React from 'react';

type CheckboxType = {
    style: boolean
    checked: boolean
    callBack: () => void
}
const Checkbox = (props: CheckboxType) => {
    return (
        <input
            type={"checkbox"}
            className={props.checked ? 'is-done' : ''}
            checked={props.checked}
            onChange={props.callBack}
        />
    );
};

export default Checkbox;