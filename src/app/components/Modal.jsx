'use client'
import { useContext, Fragment } from 'react'
import microfictionsContext from '../contexts/microfictions.context'
import { Dialog, Transition } from '@headlessui/react'

const Modal = (props) => {
  const { closeModal, isOpen, modalAttr } = useContext(microfictionsContext)
  if (!modalAttr) {
    return false
  }
  const mfDate = modalAttr.getNamedItem('datadate').value
  const mfHour = modalAttr.getNamedItem('datahour').value
  const mfText = modalAttr.getNamedItem('datatext').value


  return (
    <>
      <Transition appear show={isOpen} as={Fragment} className="z-1000">
        <Dialog as="div" className="relative z-1000" onClose={closeModal}>
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
                <div className="dialog-panel-wrapper rounded-2xl py-4">
                  <Dialog.Panel className="dialog-reunion w-full max-w-md font-typewriter transform py-4 px-8  text-left align-middle transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900"
                    >
                      {mfDate} - {mfHour}
                    </Dialog.Title>
                    <div className="mt-2 pb-4 text-lg">
                      {/* {Texte_microfiction.map((para) => {
                        return <p key={coordX}>{para}</p>
                      })} */}
                      <p>{mfText}</p>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal
