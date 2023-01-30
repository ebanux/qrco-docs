# Static QR codes

The section [The QR Link Creation](the_qr_link_creation.md) explains the steps to create a QR code.  Before start creating a QR code, you need to decide what kind of QR code you want to create: an static QR code or a dynamic one.

![image](https://user-images.githubusercontent.com/54523080/207507368-66693e6e-6e40-4b9b-abee-da78ecb02d60.png) 

This section explain some details about the static QR codes.

## Features of Static QR codes

- Static QR Codes contain constant data, for example, an embedded URL with a fixed destination. 

- The invariable data like the fixed URL is part of the QR code pattern, which means you can’t edit static QR codes. 

- An Static QR Code always leads the user to the same URL destination or content.

- You should create an Static QR codes only when you are sure you will not need to change its content in the future. On the contrary, you should consider to create a Dynamic QR code instead. 

## Types of Static QR codes

A QR code contains information such as an URL or an string of characters. Depending on the structure of that information, the QR code may lead the user to open a webpage in a browser, to send an SMS or a whatsapp message, etc. 

The table below shows the types of Static QR codes  you can create by using The QR Link.

| QR code Type   | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| Website        | Open a webpage                                                        |
| Email          | Send an email                                                         |
| SMS            | Send an SMS                                                           |
| VCard          | Add a contact to your device                                          |
| Text           | Copy a text message to the clipboard                                  |
| WiFi           | Connect to a WiFi network                                             |
| Twitter        | Share a tweet in Twitter                                              |
| Whatsapp       | Send a whatsapp message                                               |
| Facebook       | Share an URL in Facebook                                              |
| Cripto Payment | Open a payment link for sending different kinds of cripto currencies. |

The content of the QR code depends on the type of QR you want to create. To know what information you need to specify for every type of QR code, you should read below.

#### Website

![image](https://user-images.githubusercontent.com/54523080/207966521-3a03f4bc-64b4-4df1-a9e1-3178032d38c1.png)

After selecting the type Website you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Website: the website URL

Both values are required.

The icon below the Next button let you know you're creating an Static QR code.

![image](https://user-images.githubusercontent.com/54523080/208016637-3e4a6ff9-22d3-4136-8a81-2f8745cec9cb.png)

#### vCard

![image](https://user-images.githubusercontent.com/54523080/207966645-b637b0ad-89ab-4f61-b130-dfeca5db642c.png)

After selecting the type VCard you need to enter a value for every field related to the contact.The QR name and the First name are required.

![image](https://user-images.githubusercontent.com/54523080/207966701-01633db8-3455-4e27-acd9-6f71f2349536.png)

#### Email

![image](https://user-images.githubusercontent.com/54523080/207966792-b78cd51c-bc95-4d37-a7e5-8861ef31c109.png)

After selecting the type Email you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Email: the email address

- Subject: the email subject

- Body: the email message

The QR name and the Email are required. It's also mandatory to enter a value for one of the two fields: Suject or Body.

![image](https://user-images.githubusercontent.com/54523080/207966824-89dd5a3c-83ec-4892-b47d-6d808a515adc.png)

#### SMS

![image](https://user-images.githubusercontent.com/54523080/207966881-5315334c-9cfb-442c-b045-eab28e47260a.png)

After selecting the type SMS you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Number: the cellphone number

- Message: the short message

The three values are required.

![image](https://user-images.githubusercontent.com/54523080/207966923-f4ffa651-7fc7-45b3-a8a1-6f4e4ba178bd.png)

#### Text

![image](https://user-images.githubusercontent.com/54523080/207966965-e2ecefe3-7db5-4870-b374-1a3cb171b332.png)

After selecting the type Text you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Message: a plaintext message (emojis are not allowed).

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/207967008-0148407d-1042-41b5-9524-98ce9e4666b7.png)

#### WiFi

![image](https://user-images.githubusercontent.com/54523080/207967077-e8a4d642-9a95-4a79-bfc5-851af1b1f11b.png)

After selecting the type WiFi you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Name: the SSID of the Wifi network

- Encription: the encription type

- Password: the Wifi password (optional)

The QR name and the Network Name are required.

![image](https://user-images.githubusercontent.com/54523080/207967109-ac29d0fb-2336-4be8-8382-a27972fcf799.png)

#### Twitter

![image](https://user-images.githubusercontent.com/54523080/207967172-eeb23508-f485-467c-8f56-c154df671c87.png)

After selecting the type Twitter you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Text:  the tweet content.
- Mention: a username to be targeted in your tweet (without the @ symbol)
- Hashtags: a comma separated list of hashtags to be included in the tweet (without the # symbol)
- URL: an URL to be shared in the tweet

All the elements are grouped in the tweet in the order: Text, URL, Hashtags, Mention. The max tweet size is 280 characters.

The QR name field is required. It's also mandatory to enter a value for at least one field from the list: Text, Mention, Hashtag or URL. 

![image](https://user-images.githubusercontent.com/54523080/207967217-dc0805b2-a54d-4d11-9542-63b732fd2c99.png)

After entering the data, you will be able to copy to clipboard the Output URL. That URL is build from your data and it will be associated to the Static QR code. If you want to create a Short URL by using this Output URL, you can copy it and use that URL when you create de Dynamic QR code. 

#### Whatsapp

![image](https://user-images.githubusercontent.com/54523080/207967273-fa583bf8-4125-407d-b1cd-e2f53e3eeecc.png)

After selecting the type Whatsapp you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- The cellphone number registered in whatsapp, including the contry code, for example +1.
- Message: The whatsapp message (may include emojis)

The three values are required.

![image](https://user-images.githubusercontent.com/54523080/207967301-91515812-4e11-4767-8d68-dc3474f60927.png)

After entering the data, you will be able to copy to clipboard the Output URL. That URL is build from your data and it will be associated to the Static QR code. If you want to create a Short URL by using this Output URL, you can copy it and use that URL when you create de Dynamic QR code.

#### Facebook

![image](https://user-images.githubusercontent.com/54523080/207967354-9c15b10e-67e5-40aa-a563-ae991539f166.png)

After selecting the type Facebook you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Post: A URL you want to share in facebook.

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/207967395-231a85df-3986-465d-adbb-a9edc5e90a41.png)

After entering the data, you will be able to copy to clipboard the Output URL. That URL is build from your data and it will be associated to the Static QR code. If you want to create a Short URL by using this Output URL, you can copy it and use that URL when you create de Dynamic QR code.

#### Cripto Payment

![image](https://user-images.githubusercontent.com/54523080/207967433-53187efa-a12a-4882-8e4c-c448841a562b.png)

After selecting the type Cripto Payment you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Blockchain: the cripto currency you want to receive via cripto payment link.
- Addresss: the receiver wallet address in the corresponding format.
- Additional Information: An optional message to be send together with the payment.

The QR name, the Blockchain and the Address are required.

![image](https://user-images.githubusercontent.com/54523080/207967489-2fcdf028-26fb-41f2-a799-2afab3fbf88d.png)
