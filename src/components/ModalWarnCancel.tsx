import React from 'react'

const ModalWarnCancel = ({onclick}:{onclick:VoidFunction}) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-white/50  ">
          <div className="min-w-3/4 max-w-3/4 bg-primary-cream border-4 border-secondary-red rounded-lg p-4">
            <div className="text-center">
              <h2 className="font-bold text-xl">Warning</h2>
              <div className="space-y-2 py-6">
                <p>Yakin Cancel ?</p>
                <p>point akan berkurang 100 loh...</p>
              </div>
            </div>
            <div className="text-primary-cream flex gap-6 justify-center">
              <button
                onClick={onclick}
                className="bg-primary-red px-4 py-2 rounded-lg font-semibold text-lg"
              >
                Cancel
              </button>
              <button onClick={onclick} className="bg-secondary-red px-4 py-2 rounded-lg font-semibold text-lg">
                Yes
              </button>
            </div>
          </div>
        </div>
  )
}

export default ModalWarnCancel