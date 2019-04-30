const webPTestData = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="

export const mediaSupport = {
    supportsWebP: false,
}

export const checkWebPSupport = () =>
    new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        const img = new Image()

        img.onload = () => {
            resolve(!!(img.height > 0 && img.width > 0))
        }
        img.onerror = () => {
            resolve(false)
        }

        img.src = webPTestData
    })

checkWebPSupport()
    .then((hasSupport) => {
        mediaSupport.supportsWebP = hasSupport
    })
