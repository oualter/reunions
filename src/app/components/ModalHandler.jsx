'use client'
import { Dialog, Transition } from '@headlessui/react'
import { stringify } from 'querystring'
import { Fragment, useState } from 'react'

export default function ModalHandler(props) {
    // console.log('props => ',props)
    const {classNameValue, coordX, coordY, year, month, day, time, content} = props
    // console.log('content => !!',content[0].children)
    const contentFormatted = content[0].children
    // console.log('contentFormatted => ', contentFormatted)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
      console.log(('open true'))
    setIsOpen(true)
  }

  return (
    <>
      <div
        className={classNameValue}
        style={{ top: `${coordY}px`, left: `${coordX}px` }}
        onClick={openModal}
      >
        {/* <button type="button" onClick={openModal} className="rounded-md"> */}
        {/* <button type="button"> */}
        Lire la Microfiction
        {/* </button> */}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   {day} {month} {year} - {time}
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                    {contentFormatted.map((para) =>{
                        return <p key={coordX}>{para.text}</p>
                    })}
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
