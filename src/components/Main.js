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
      'Скрыть полную информацию': 
      'Показать полную информацию';
  };

  function reportButtonClassName() {
    return !isValid ?
      'form__button form__button_inactive':
      'form__button'
  }

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
        </ul>

        <div className={`${props.isOpen ? '' : 'report__hidden'}`}>
          <ul className='report__items'>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data type'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data length'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingLoad'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data startUpCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>            <li className='report__item'>
              <p className='report__subtitle'>Уточнить у CD</p>
              <p className='report__data operatingCurrent'>Уточнить у CD</p>
            </li>
          </ul>
        </div>
        <button
          className='report__button'
          onClick={props.handlerOpen}>
          {reportButtonText()}
        </button>
        <button
          className='report__button'>
          Показать спецификацию
        </button>
      </div>
    </>
  );
}
