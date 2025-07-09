document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data for the player
        const studentName = document.getElementById('student-name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;
        const parentPhone = document.getElementById('parent-phone').value;
        const gameSelection = document.getElementById('game-selection').value;

        // Basic validation
        if (!studentName || !birthDate || !gender || !address || !parentPhone || !gameSelection) {
            alert('يرجى ملء جميع البيانات المطلوبة.');
            return;
        }

        // Club's WhatsApp number (with country code for Egypt)
        const clubWhatsappNumber = '201227098952';

        // Create the message
        const message = `
- - - - - - - - - - - - - -
⚽ *تسجيل لاعب جديد* ⚽
- - - - - - - - - - - - - -

👤 *بيانات اللاعب*
*الاسم:* ${studentName}
🎂 *تاريخ الميلاد:* ${birthDate}
🚻 *الجنس:* ${gender}

🏠 *معلومات التواصل*
*العنوان:* ${address}
📱 *رقم ولي الأمر:* ${parentPhone}

🏆 *بيانات رياضية*
*اللعبة المختارة:* ${gameSelection}

- - - - - - - - - - - - - -
        `.trim();

        // URL-encode the message
        const encodedMessage = encodeURIComponent(message);

        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${clubWhatsappNumber}?text=${encodedMessage}`;

        // Show success message and hide the form
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Open the WhatsApp URL in a new tab
        window.open(whatsappUrl, '_blank');

        // Optional: Reset the form after a delay so the user can register another student
        setTimeout(() => {
            form.reset();
            form.classList.remove('hidden');
            successMessage.classList.add('hidden');
        }, 7000); // Reset after 7 seconds
    });
});
