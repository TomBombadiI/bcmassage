import Field from '@/components/Field';
import './FeedbackForm.scss';
import Button from '@/components/Button';

export default () => {
  return (
    <form className='feedback-form' action="">
      <Field label='Ваше имя' inputMode='text' isRequired />
      <Field label='Телефон' placeholder='+7 (000) 000-00-00' inputMode='tel' mask='+7 (000) 000-00-00' isRequired />
      <Field label='Email' inputMode='email' placeholder='ivan@ivanov.com' mask='___@___.__' isRequired />
      <Field label='Город' inputMode='text' />

      <Button className='feedback-form__submit-button' type='submit'>
        Зарегистрироваться
      </Button>
    </form>
  );
}
