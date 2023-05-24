import img from '../images/main_icon.png';
import { useForm } from "react-hook-form";

export default function Main(props) {
  const {
    formState: {
      isValid
    },
    reset,
    register,
    getValues,
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });

  function onSubmit() {
    const dataCircuit = getValues('circuit')
    props.onSubmit(Number(dataCircuit));
    reset();
  };

  function reportButtonText() {
    return props.isOpen ? 
      'Скрыть информацию о чертежах': 
      'Показать информацию о чертежах';
  };

  function reportButtonClassName() {
    return !isValid ?
      'form__button form__button_inactive':
      'form__button'
  };

  return (
    <>
      <div className='search'>
        <img className='search__img' src={img} alt='magnifier'/>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input className='form__input'placeholder='Введите номер цепи'
            {...register("circuit", {
              required: true,
              minLength: 5,
              maxLength: 5,
            })
            }
          />
          <button className={reportButtonClassName()}  type='submit'>Найти</button>
        </form>
      </div>
      <div className='report'>
        <h2 className='report__title'>Информация о цепи</h2>
        <ul className='report__items'>
          <li className='report__item'>
            <p className='report__subtitle'>Зона обогрева:</p>
            <p className='report__data zone'>{props.circuit.zone}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Номер линии:</p>
            <p className='report__data tag'>{props.circuit.lineNumber}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Номер греющей цепи:</p>
            <p className='report__data tag'>{props.circuit.tag}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Тип греющего кабеля:</p>
            <p className='report__data cableType'>{props.circuit.cableType}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Длина греющего кабеля (м):</p>
            <p className='report__data length'>{props.circuit.length}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Рабочая мощность (Вт):</p>
            <p className='report__data operatingLoad'>{props.circuit.operatingLoad}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Проектный стартовый ток (А):</p>
            <p className='report__data startUpCurrent'>{props.circuit.startUpCurrent}</p>
          </li>
          <li className='report__item'>
            <p className='report__subtitle'>Проектный рабочий ток (А):</p>
            <p className='report__data operatingCurrent'>{props.circuit.operatingCurrent}</p>
          </li>
          <li className='report__item'>
              <p className='report__subtitle'>Панель обогрева:</p>
              <p className='report__data type'>{props.circuit.ehtPanel}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Тип соединительной коробки:</p>
              <p className='report__data length'>{props.circuit.junctionBoxType}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Наличие элект. регулятора:</p>
              <p className='report__data operatingLoad'>{props.circuit.ngc20}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Наличие RTD:</p>
              <p className='report__data startUpCurrent'>{props.circuit.rtd}</p>
            </li>
        </ul>

        <div className={`${props.isOpen ? '' : 'report__hidden'}`}>
          <ul className='report__items'>
            <li className='report__item'>
              <p className='report__subtitle'>ISO:</p>
              <p className='report__data type'>{props.circuit.iso}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>SLD:</p>
              <p className='report__data length'>{props.circuit.sld}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>CWD:</p>
              <p className='report__data operatingLoad'>{props.circuit.cwd}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>PCL:</p>
              <p className='report__data startUpCurrent'>{props.circuit.pcl}</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>BOM:</p>
              <p className='report__data startUpCurrent'>{props.circuit.bom}</p>
            </li>
          </ul>
        </div>

        <button
          className='report__button'
          onClick={props.handlerOpen}>
          {reportButtonText()}
        </button>
      </div>
    </>
  );
}
