# Phishing-Site-Education-Purposes

## Disclaimer
This repository is intended solely for educational purposes to demonstrate the risks and vulnerabilities associated with phishing attacks. The code provided should **never** be used for illegal or unethical purposes. Misuse of the content in this repository can result in severe legal consequences. Always obtain proper authorization before testing or deploying any phishing techniques.

## Overview
This project demonstrates a fully functional phishing site designed to replicate the look and feel of a legitimate website. The purpose is to educate individuals about the dangers of phishing, how these attacks are conducted, and how one can protect themselves from such threats.

I'm not providing the code of the backend and **the login page's code is obfuscated** to make sure that no one can change the code of it and misuse it.

## Features
- **Realistic Interface:** Mimics the login page of microsoft to demonstrate how phishing attacks work.
- **Credential Capture:** Captures and logs credentials entered by unsuspecting users.
- **Undetectable:** It contains robots.txt which blocks crawler bots and the login page's code is obfuscated and debugger pauser runs in loop that makes it undetectable.
- **Redirection:** It redirects the root URL to https://www.minecraft.net/en-US/ which feels like that it it's the part of the official site

## Installation

### Prerequisites
- nodejs (For running the server)
- npm (To install the necessary modules)
- git (To clone the repository)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/minecraft-beta/minecraft-beta.github.io
    ```
2. Navigate to the project directory:
    ```bash
    cd minecraft-beta.github.io
    ```
3. Install the necessary dependencies:
    ```bash
    npm install express
    ```
4. Run the server:
    ```bash
    node server.js
    ```
5. Open your web browser and navigate to `http://localhost:3000/cape/`. (make sure to mention /cape/)

## Usage
This phishing site is designed to be used in a controlled environment. It should be hosted on a local machine or a secure, authorized server only for educational or research purposes. The site can be used to:
- **Ethical Use**: Use this code only in environments where it is legal and ethical to do so. Do not use this for any malicious activities.

---

## Conclusion
- Demonstrate how easy it is to fall victim to phishing.
- Shows how dumb and useless the verified URLs and SSL certificatesa are.

---

## PREVENTION
There's only a single prevention method and that is to use the 2 factor authentication.

---

## Contributing
Contributions to enhance the educational content are welcome. Please submit a pull request with a detailed explanation of your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
This project was created with the intent to educate and promote cybersecurity awareness. Special thanks to those who contribute to making the internet a safer place.

---

**Warning:** Misuse of this tool can lead to serious legal consequences, including criminal charges. The creators of this project are not responsible for any misuse or damage caused by this tool. Always act responsibly and ethically.

---

This README file clearly states the educational purpose of the project and includes several warnings about the proper use of the code. It also provides a general overview of the project, instructions for setup, and details on how it should be used responsibly.
