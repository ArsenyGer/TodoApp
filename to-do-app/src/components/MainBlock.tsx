'use client'

import React, { useState } from 'react'
import styles from './mainblock.module.scss'
import ListItem from './listItem/ListItem'


interface ItoDo {
  id: number,
  message: string,
  isDone: boolean,
}


const MainBlock = () => {
  const initialObject: ItoDo = {
    id: 1,
    message: `Don't forget to go to the gym`,
    isDone: false,
  }
  const initialObject2: ItoDo = {
    id: 2,
    message: `Don't forget to go to the gym`,
    isDone: false,
  }
  const [toDoItems, setToDoItems] = useState<ItoDo[]>([]);

  const [inputValue, setInputValue] = useState('')

  const inputHandler = (event: any) => {
    setInputValue(event.target.value)

  }

  const changeDone = (id: number) => {
    const changedList = toDoItems.map((el) => {
      if (el.id == id) {
        el.isDone = !el.isDone
        return el
      }
      else {
        return el
      }
    })

    setToDoItems(changedList)
    let audioDone = new Audio(); // Создаём новый элемент Audio
    audioDone.src = 'done.mp3'
    audioDone.play()
  }

  const addTask = () => {
    const newid = toDoItems.length > 0 ? toDoItems.at(-1)?.id + 1 : 1
    const obj: ItoDo = {
      id: newid,
      message: inputValue,
      isDone: false,

    }
    const arr = toDoItems
    const arr2 = [obj]
    const arr3 = arr.concat(arr2)
    setInputValue('')
    setToDoItems(arr3)

    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'main.mp3'
    audio.play()





  }

  const deleteTask = (id: number) => {
    const ClearList = toDoItems.filter((el) => {
      return el.id != id
    })

    setToDoItems(ClearList)
    let audioDelete = new Audio(); // Создаём новый элемент Audio
    audioDelete.src = 'delete.mp3'
    audioDelete.play()



  }


  return (
    <div className={styles.block} >
      <p className={styles.title}>To-Do List</p>
      <div className={styles.input}>
        <input className={styles.trueInput} type='text' placeholder='write yout task here...' value={inputValue} onChange={inputHandler}></input>
        <div className={styles.subButton} onClick={addTask}>Add</div>
      </div>
      {/* <div className={styles.items}>
        {toDoItems && toDoItems.map((item: ItoDo) => {
          return <ListItem item={item} changeDone={changeDone} deleteTask={deleteTask} />
        })}
      </div> */}
      {toDoItems && toDoItems.map((item: ItoDo) => {
        return <ListItem item={item} changeDone={changeDone} deleteTask={deleteTask} />
      })}


    </div>
  )
}

export default MainBlock