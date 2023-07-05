import './form-input.styles.scss';

const FormInput = ({ label, ...props }) => {
    return (
        <div className='group'>
            <input className='form-input' {...props} />
            {label && (
                <label className={`${props.value.length ? 'shrink' : null} form-input-label`}>{label} </label>
            )}
        </div>
    );
};

export default FormInput;