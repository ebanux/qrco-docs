# Static QR codes

The section [The QR Link Creation](the_qr_link_creation.md) explains the steps to create a QR code.  Before start creating a QR code, you need to decide what kind of QR code you want to create: an static QR code or a dynamic one.

![image](https://user-images.githubusercontent.com/54523080/194652881-3004501a-9f0c-4adb-a9d4-0dcef55135c0.png) 

This section explain some details about the static QR codes.

## Features of Static QR codes

- Static QR Codes contain constant data, for example, an embedded URL with a fixed destination. 

- The invariable data like the fixed URL is part of the QR code pattern, which means you can’t edit static QR codes. 

- An Static QR Code always leads the user to the same URL destination or content.

- You should create an Static QR codes only when you are sure you will not need to change its content in the future. On the contrary, you should consider to create a Dynamic QR code instead. 

## Types of Static QR codes

A QR code contains information such as an URL or an string of characters. Depending on the structure of that information, the QR code may lead the user to open a webpage in a browser, to send an SMS or a whatsapp message, etc. 

The table below shows the types of Static QR codes  you can create by using The QR Link.

| QR code Type | Purpose                              |
| ------------ | ------------------------------------ |
| Website      | Open a webpage                       |
| Email        | Send an email                        |
| SMS          | Send an SMS                          |
| VCard        | Add a contact to your device         |
| Text         | Copy a text message to the clipboard |
| WiFi         | Connect to a WiFi network            |
| Twitter      | Share a tweet in Twitter             |
| Whatsapp     | Send a whatsapp message              |
| Facebook     | Share an URL in Facebook             |

The content of the QR code depends on the type of QR you want to create. To know what information you need to specify for every type of QR code, you should read below.

#### Website

![image](https://user-images.githubusercontent.com/54523080/195422185-0f0caee5-f472-4b3a-99fa-e9fc6e4c9164.png)

After selecting the type Website you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Website: the website URL

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/195423791-6501a0ae-dc54-4907-865a-60c6da914b95.png)

#### Email

![image](https://user-images.githubusercontent.com/54523080/195424891-693a1e44-e4ca-4168-947f-dd151d49e196.png)

After selecting the type Email you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Email: the email address

- Subject: the email subject

- Body: the email message

The QR name and the Email are required. It's also mandatory to enter a value for one of the two fields: Suject or Body.

![image](https://user-images.githubusercontent.com/54523080/195425278-1c389823-a3c7-4164-9533-99543da812cd.png)

#### SMS

![image](https://user-images.githubusercontent.com/54523080/195426480-7746b84f-c400-4eff-b404-6929448a6805.png)

After selecting the type SMS you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Number: the cellphone number

- Message: the short message

The three values are required.

![image](https://user-images.githubusercontent.com/54523080/195430300-582e83e9-24c0-4d9e-ad24-96bd4328a8ae.png)

#### VCard

![image](https://user-images.githubusercontent.com/54523080/195430672-3ac101d0-400f-4673-bd23-2dacf7d97d1d.png)

After selecting the type VCard you need to enter a value for every field related to the contact.The QR name and the First name are required.

![image](https://user-images.githubusercontent.com/54523080/195449969-7fd188bd-61ac-4e12-8880-e7332d2f331c.png)

#### Text

![image](https://user-images.githubusercontent.com/54523080/195431775-9638ec5c-3556-4f56-9faf-e476cdbbf493.png)

After selecting the type Text you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Message: a plaintext message (emojis are not allowed).

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/195432029-a08a98c6-14c9-4a9c-a639-6f747de01c25.png)

#### WiFi

![image](https://user-images.githubusercontent.com/54523080/195432158-886d8b07-8436-4864-95c4-c0ac81ae3f01.png)

After selecting the type WiFi you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Name: the SSID of the Wifi network

- Encription: the encription type

- Password: the Wifi password (optional)

The QR name and the Network Name are required.

![image](https://user-images.githubusercontent.com/54523080/195432290-6d1dd53d-493e-4cb4-8d5a-05126c6910eb.png)

#### Twitter

![image](https://user-images.githubusercontent.com/54523080/195432618-1acb820e-cc3c-4153-9af2-362e3183238c.png)

After selecting the type Twitter you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Text:  the tweet content.
- Mention: a username to be targeted in your tweet (without the @ symbol)
- Hashtags: a comma separated list of hashtags to be included in the tweet (without the # symbol)
- URL: an URL to be shared in the tweet

All the elements are grouped in the tweet in the order: Text, URL, Hashtags, Mention. The max tweet size is 280 characters.

The QR name field is required. It's also mandatory to enter a value for at least one field from the list: Text, Mention, Hashtag or URL. 

![image](https://user-images.githubusercontent.com/54523080/195432908-85d82342-d024-42b8-88e1-a2c227edeb5b.png)

#### Whatsapp

![image](https://user-images.githubusercontent.com/54523080/195433588-e0d491d4-5a41-419b-9127-af6c3e3d732c.png)

After selecting the type Whatsapp you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- The cellphone number registered in whatsapp, including the contry code, for example +1.
- Message: The whatsapp message (may include emojis)

The three values are required.

![image](https://user-images.githubusercontent.com/54523080/195433760-7bc490c8-4ac2-42c8-8111-103ba0611b72.png)

#### Facebook

![image](https://user-images.githubusercontent.com/54523080/195433984-1961335e-f2a0-4f5b-99c2-7509e5ecab21.png)

After selecting the type Facebook you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Post: A URL you want to share in facebook.

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/195434113-f03a79ad-334c-471c-92c3-b2608e25a627.png)
