import React, { useState } from 'react'
import Modal from 'react-modal'
import './AddExpense.css'

const AddExpense = () => {
    const [openModal, setOpenModal] = useState(false)
    const [expenseTitle, setExpenseTitle] = useState('')
    const [expenseAmount, setExpenseAmount] = useState(null)

    const addExpenseHandler = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }
    return (
        <div className='add__Expense'>
            <div className='addExpense__button'>
                <button onClick={addExpenseHandler}>
                    Add New Expense
                </button>
            </div>
            <div>
                <Modal
                    isOpen={openModal}
                    style={customStyle}
                    onRequestClose={closeModal}
                >
                    <div className='addExpense__modal'>
                        <div className='item_div'>
                            <h4>Expense:</h4>
                            <input
                                type={String}
                                value={expenseTitle}
                                onChange={(e) => setExpenseTitle(e.target.value)}
                            />
                        </div>
                        <div className='amount_div'>
                            <h4>Amount:</h4>
                            <input
                                type={String}
                                value={expenseAmount}
                                onChange={(e) => setExpenseAmount(e.target.value)}
                            />
                        </div>

                        <button id='add_button'
                            onClick={closeModal}>
                            Add
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default AddExpense