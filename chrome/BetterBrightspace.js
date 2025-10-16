// Wait for the page content to be fully loaded
window.addEventListener('load', async () => {
    // Select the element <div id="d2l_1_19_611" class="d2l-fra-iframe">
    const targetElement = document.querySelector('.d2l-fra-iframe');

    if (!targetElement) {
        console.log('Target element not found');
        return;
    }

    // Inside this element is an iframe, select it
    const iframe = targetElement.querySelector('iframe');
    if (!iframe) {
        console.log('Iframe not found inside target element');
        return;
    }

    // Function to wait for iframe to load
    function waitForIframeLoad(iframe) {
        return new Promise((resolve) => {
            if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                resolve();
            } else {
                iframe.addEventListener('load', () => {
                    resolve();
                }, { once: true });
            }
        });
    }

    // Wait for the iframe to load
    await waitForIframeLoad(iframe);

    // Access the iframe's document
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) {
        console.log('Could not access iframe document');
        return;
    }

    // when the iframe is loaded, there is an app.css file in the head, we want to modify it
    const appCssLink = iframeDocument.querySelector('link[href*="app.css"]');
    if (!appCssLink) {
        console.log('app.css link not found in iframe document');
        return;
    }
    const appCssUrl = appCssLink.href;

    // Modify the CSS by adding a new style element that overrides the original
    const styleElement = iframeDocument.createElement('style');
    styleElement.textContent = `
        #app #root-wrapper {
            max-width: 80% !important;
        }
        [dir=ltr] #app #root-wrapper .content-panel {
            left: 30% !important;
            width: calc(100% - 30%) !important;
        }
        #app #root-wrapper .navigation-container {
            width: 30% !important;
        }
        @media (max-width: 936px) {
            #app #root-wrapper {
                max-width: 100% !important;
            }
            [dir=ltr] #app #root-wrapper .content-panel {
                left: 0 !important;
                width: 100% !important;
            }
            #app #root-wrapper .navigation-container {
                border-right: none !important;
            }
            .navigation-tree {
                display: none !important;
            }
        }
    `;
    iframeDocument.head.appendChild(styleElement);

});