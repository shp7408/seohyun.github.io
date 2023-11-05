// assets/js/post.js
var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    codeBlock.insertBefore(copyButton, codeBlock.firstChild);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('code');
        var clonedCode = code.cloneNode(true);
        clonedCode.querySelector('pre.lineno').remove();

        var innerText = clonedCode.innerText;
        window.navigator.clipboard.writeText(innerText);

        copyButton.innerText = 'Copied';
        var fourSeconds = 4000;

        setTimeout(function () {
            copyButton.innerText = 'Copy';
        }, fourSeconds);
    });
});