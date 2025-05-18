import React from 'react'

const ModalWarnArticle = ({onclick}:{onclick:VoidFunction}) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-white/50  ">
          <div className="min-w-3/4 max-w-3/4 bg-primary-cream border-4 border-secondary-red rounded-lg p-4">
            <div className="text-center">
              <h2 className="font-bold text-xl">Warning</h2>
              <div className="space-y-2 py-6">
                <p>Anda Belum</p>
                <p>Sampai Lokasi !</p>
              </div>
            </div>
            <div className="text-primary-cream flex gap-6 justify-center">
              <button
                onClick={onclick}
                className="bg-primary-red w-full text-center py-2 rounded-lg font-semibold text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
  )
}

export default ModalWarnArticle