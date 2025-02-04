import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const TodoButton = ({
  idnum,
  todonam,
  todo_id,
  onClickArchive,
  onClickDelete,
}) => {
  return (
    <div className='tasks'>
      <div className='d-flex gap-1'>
        <div className='number'>
          <p className='text-center my-auto'> {idnum}</p>
        </div>
        <button className=' m-3px'>{todonam} </button>
      </div>
      <div className='d-flex '>
        <button onClick={() => onClickArchive(todo_id)}>
          <AiFillCheckCircle className='c-checkcolor text-24px m-0px' />
        </button>
        <button onClick={() => onClickDelete(todo_id)}>
          <AiFillCloseCircle className='c-cancelcolor text-24px m-0px' />
        </button>
      </div>
    </div>
  )
}
export default TodoButton
