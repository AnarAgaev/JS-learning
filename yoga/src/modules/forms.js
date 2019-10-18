let message = {
    loading: 'Loading...',
    success: 'Thanks! We will contact you soon!',
    failure: 'Something went wrong :( ...',
};

export default function sendForm(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        let input = form.getElementsByTagName('input'),
            formData = new FormData(form),
            statusMessage = document.createElement('div');

        statusMessage.style.cssText = "color: white; padding-top: 10px";
        form.append(statusMessage);

        function postData(data) {
            return new Promise((reject, resolve) => {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json: charset= utf-8');
                request.send(data);
                request.addEventListener('readystatechange', function () {
                    if (request.readyState < 4) reject();
                    else if (request.readyState === 4 && request.status == 200) reject();
                    else resolve();
                });
            });
        }

        function clearForm() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => { statusMessage.innerHTML = message.loading; })
            .then(() => { statusMessage.innerHTML = message.success; })
            .catch(() => { statusMessage.innerHTML = message.failure; })
            .finally(clearForm());
    });
}
