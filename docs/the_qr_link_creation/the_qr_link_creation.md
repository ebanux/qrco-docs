# The QR Link Creation

[The QR Link](https://www.theqr.link/) is a feature of [Ebanux Marketplace](https://www.ebanux.com/) that facilitates the design of QR codes which can be used for multiple purposes. It is available at https://app.theqr.link/

![image](https://user-images.githubusercontent.com/54523080/185217050-4001e19e-34ad-41f7-8bcf-d50cc12c7a66.png)

## How to create a QR code

Generating a QR code with The QR Link is very easy, you just need to follow three simple steps:

**1- Choose the type of QR Code**

Select from URL, Plain Text, vCard, SMS, Email, Twitter, WiFi and more.

**2- Customize your QR Code** 

Enter all the info needed based on your QR type. Desing your QR code with custom shapes, colors and frames.

**3- Download and Share it** 

Download & Share the QR or short URL for any channel.

### Choose the type of QR Code

At first you need to selelc the type of QR code you want to create, for example a QR code that links a website.

![image](https://user-images.githubusercontent.com/54523080/185217683-cc63bd06-f0f8-4373-8f23-e44b098fc458.png)

Then you will need to enter some information according to the type of QR you want to create. For example, in the case of QR for linking to a website URL you just need to enter the URL. You can find the explanation about the data to be define for every type of QR code in the section [How to create different types of QR codes](#how-to-create-different-types-of-qr-codes)

![image](https://user-images.githubusercontent.com/54523080/185217443-731c4afc-ac0c-404a-bf9f-b3aa2f35b9bb.png)

When you generate a QR code, it's better if you use a **short link** instead of a static URL. By using our solution for managing **Short Links** you can take advantage of two improvements: a code less dense and the same code can be used to link different URLs, which are described below.

***A code less dense***

When you need to link a long URL the QR code might become dense. So, it's better if you use a short link instead and, as a result, you can generate a less dense code.

For example let's suppose we create a short link https://qrco.sh/a4Y7bO for the static URL https://docs.cenit.io/docs/basic_integration and after that we generate a QR code for both URLs. The image below shows the difference between the QR codes. As you can see, the QR for the short link is simpler than the QR for the static URL which is longer than the short link.

![image](https://user-images.githubusercontent.com/54523080/183731130-2758cb15-d4e4-42e0-ad3e-10b8ec3ec730.png)

***The same code can be used to link different URLs***

Since an **Ebanux Short Link** can be edited, a dynamic URL can be defined, so the same short link can be initially linked to a static URL and you may change the static URL later. For example let's suppose we create a short link https://qrco.sh/a4Y7bO for the static URL https://docs.cenit.io/docs/basic_integration. Later we can edit the short link and change the URL associated to it from https://docs.cenit.io/docs/basic_integration to https://docs.cenit.io/docs/intro. That means the same short link https://qrco.sh/a4Y7bO now is linked to https://docs.cenit.io/docs/intro. 

If we create the QR for the short link, no matter what URL the short link is associated to, the QR code will lead you to one URL or another depending on the short link definition. The picture below explains this example. At first the QR code leads you to the webpage https://docs.cenit.io/docs/basic_integration, but after editing the URL associated to the short link, the same QR code will lead you to the webpage  https://docs.cenit.io/docs/intro.

![image](https://user-images.githubusercontent.com/54523080/183738323-463f305c-5e1f-406a-92a4-85184427afb6.png)

After selecting the type of QR code, you need to customize it. The customization is similar regardless the type of QR code and you can learn how to do that in the next section. 

### Customize your QR Codes

For customizing the QR code, press the QR Editor button at the bottom right. 

![image](https://user-images.githubusercontent.com/54523080/185217963-17c3cad2-93d1-4852-ae55-84619fb6d0ab.png)

After pressing the QR Editor button, the QR Designar view is shown. The frames section allows you to decide the type of frame surrounding the code. The picture below shows a code with no frame.

![image](https://user-images.githubusercontent.com/54523080/185218201-0590588d-c534-4893-b102-2ff34e137814.png)

The picture below show the result of selecting a simple frame.

![image](https://user-images.githubusercontent.com/54523080/185218666-b6236e22-29a1-4733-9d31-0e5355b67994.png)

Some types of frame contains both a frame and a call to action text, like the one in the picture below

![image](https://user-images.githubusercontent.com/54523080/185219578-3bff8352-d917-4b11-8632-268181ed3216.png)

And you can select other types of frames with a more creative design, as shown below. Since it's a design related to the add to cart action, we are not using it in the further examples.

![image](https://user-images.githubusercontent.com/54523080/185220079-8021aa1b-0c8e-404e-adca-984e36538538.png)

When you select a type of frame, you can also customize the color for both the frame and the text. The text can be also edited, we set "SCAN ME" in the case of the example below. The "Text up" switch button allows to choose between placing the text above or bellow the code.

![image](https://user-images.githubusercontent.com/54523080/185221362-307ddc3c-4a76-432d-873f-2b76c74704bc.png)

The Code style section allows you to customize the shape and color of the four elements related to the code: the code itself, the corners, the corner dots and the background. The location of this four elements is shown below.

![image](https://user-images.githubusercontent.com/54523080/184240689-f96aab00-987d-4292-9072-f754950424d6.png)

And the picture below shows the values we set in the QR code used as an example.

![image](https://user-images.githubusercontent.com/54523080/185223399-1f35ba1e-514d-4ca4-8fc8-29a8d82e3261.png)

The picture above shows a background with solid color in white, but you can also set a bakground image by changing the bakground type to image, as shown below.  You should use the background image feature carefully because a the image could introduce noises in the code and turn it unreadable.

![image](https://user-images.githubusercontent.com/54523080/185223633-6b52e51c-04b3-47ee-9384-ec4533f3823f.png)

The logo section allows to select the logo to be set in the center of the code. The default option is No Logo.

![image](https://user-images.githubusercontent.com/54523080/185224085-950594b2-6dd5-4213-9685-6249df35e3d7.png)

The picture below shows a design where a predefined logo has been selected.

![image](https://user-images.githubusercontent.com/54523080/185224315-d5d49daf-219a-41b5-afb4-4dc7b213fadf.png)

However you can select a customized image by pressing the Upload button. In the example below the Cenit IO logo has been selected.

![image](https://user-images.githubusercontent.com/54523080/185226936-cd6f9100-440a-4deb-b163-713a22d17d21.png)

### Checking for Readability

When designing a QR code it's important to test the code to check its behavior in two ways:

- Its content is correct, so when you scan it you get the result as expected.

- It is easy to read by different devices and apps.

The best way of checking the code's readability is to use different scan devices and apps and try to read it with every device and app. However, it's better if we let you now the probability of your code to be readable or not. So, anytime in the designing process, you can press the button Check for Readability  as shown below.

![image](https://user-images.githubusercontent.com/54523080/185233696-60d9f704-a90c-41f1-a037-6b2258d9fe18.png)

After pressing the button, a flash notification announces whether the code is probably readable or not. In the case of the example the notification lets you know the code has a high chance to be readable as you can see in the picture below.

![image](https://user-images.githubusercontent.com/54523080/185236376-432285f1-f2be-45cb-b78b-f5dcf292c24d.png)

If we change the background color and try again, the notification alerts that there is a low chance to read that code well, as you can see in the picture below. So, you should take care about the contrast between the code and the background.

![image](https://user-images.githubusercontent.com/54523080/185237250-a4042bf4-289d-4d33-839d-2bc26a9c0e62.png)

The design in the picture above looks like unpleasant and most of all, it's probably unreadable. So if we change the background color to white and check for readability again, we will see the high probability notification again, as shown below.

![image](https://user-images.githubusercontent.com/54523080/185239428-fd83ce4a-81ed-4fd5-b795-b4a326a7a466.png)

### Download and Share it

After completing the customization you can press the Download button to export the QR code to be shared later.

![image](https://user-images.githubusercontent.com/54523080/185239643-79f3c7b9-68ce-4e5a-9f7e-f58f37172877.png)

If you select PNG the code can be download as an image that can be shared by sending  it as an email attachment or in a chat conversation, etc.

![image](https://user-images.githubusercontent.com/54523080/185240031-ce07335e-c050-4bf1-9afa-2707398007c2.png)

After selecting the PNG type, the code is automatically saved as shown below. 

![image](https://user-images.githubusercontent.com/54523080/185240290-f26cda00-0f9a-4279-8401-50f1b002c886.png)

You should use the SVG type if you want to embed the code in a webpage.

![image](https://user-images.githubusercontent.com/54523080/185240494-8bb07baa-2604-42cb-a62c-55302320b457.png)

After selecting the SVG type, the code is automatically saved as shown below.

![image](https://user-images.githubusercontent.com/54523080/185240655-565f1b31-8d17-42ed-9716-12bfdf91b3f2.png)

If you want to print the code for sharing a hard copy between customers or if you need to atach a printed code to a product to be sold, shipped or mailed, you probably prefer to use the option pdf.

![image](https://user-images.githubusercontent.com/54523080/185241653-91681d39-f0e1-489e-8425-3b757f9e0ee2.png)

After selecting the pdf type you can customize the pdf as shown below

![image](https://user-images.githubusercontent.com/54523080/185242225-d4ad3200-196c-4d1f-b5c5-3176d415ac6a.png)

After pressing the Download PDF button the pdf file is saved.

![image](https://user-images.githubusercontent.com/54523080/185242598-437d4b47-ba84-4b04-9f80-b75c21e02a40.png)

### How to create different types of QR codes

The section [Choose the type of QR Code](#choose-the-type-of-qr-code) explains that the first step for creating a QR code is to select the type of QR code you want to generate. Depending on the type of QR code you must enter different information related to the code. The type of QR code for a website URL was explained before. Now you can check the details about creating other types of QR codes.

#### Email

![image](https://user-images.githubusercontent.com/54523080/185255617-734beb50-a835-45aa-a711-bbd69ebfea6c.png)

After selecting the type Email you need to enter a value for every field:

- Email: the email address

- Subject: the email subject

- Body: the email message

![image](https://user-images.githubusercontent.com/54523080/185255705-5451e4b4-ef26-4457-b9c0-c6d6172afbfb.png)

#### SMS

![image](https://user-images.githubusercontent.com/54523080/185255787-5aaeea3e-8695-44be-8197-c9d263d49bab.png)

After selecting the type SMS you need to enter a value for every field:

- Number: the cellphone number

- Message: the short message

![image](https://user-images.githubusercontent.com/54523080/185255836-5f33ce42-7c73-4355-8e09-8d01dce96f05.png)

#### VCard

![image](https://user-images.githubusercontent.com/54523080/185255907-72db13c0-dfb7-43b8-827a-9ba2dd5e481b.png)

After selecting the type VCard you need to enter a value for every field related to the contact.

![image](https://user-images.githubusercontent.com/54523080/185255975-7dfc3ae2-d423-4a27-8e8c-202c41cac87b.png)

#### Text

![image](https://user-images.githubusercontent.com/54523080/185256039-f216cc6f-d83b-46a3-bde9-951e6b6e4d00.png)

After selecting the type Text you need to enter a value for every field:

- Message: a plaintext message (emojis are not allowed).

![image](https://user-images.githubusercontent.com/54523080/185256110-9b3fb0aa-243d-455b-8bf2-291d2fead80f.png)

#### WiFi

![image](https://user-images.githubusercontent.com/54523080/185256202-7e6929ee-219b-406e-b430-6d681d354227.png)

After selecting the type WiFi you need to enter a value for every field:

- Name: the SSID of the Wifi network

- Encription: the encription type

- Password: the Wifi password (optional)

![image](https://user-images.githubusercontent.com/54523080/185256262-b9154e03-351d-4cef-a48b-633e1969a0bc.png)

#### Twitter

![image](https://user-images.githubusercontent.com/54523080/185256332-5124a64a-ae5d-4670-b22f-a88fe69f1645.png)

After selecting the type Twitter you need to enter a value for every field:

- Text:  the tweet content.
- Mention: a username to be targeted in your tweet (without the @ symbol)
- Hashtags: a comma separated list of hashtags to be included in the tweet (without the # symbol)
- URL: an URL to be shared in the tweet

All the elements are grouped in the tweet in the order: Text, URL, Hashtags, Mention. 

![image](https://user-images.githubusercontent.com/54523080/185256381-443ff8ec-f126-47c8-9cdb-6e4175e6a329.png)

#### Whatsapp

![image](https://user-images.githubusercontent.com/54523080/185256445-14650790-140d-4519-be4c-e40646dcffcf.png)

After selecting the type Whatsapp you need to enter a value for every field:

- The cellphone number registered in whatsapp, including the contry code, for example +1.
- Message: The whatsapp message (may include emojis)

![image](https://user-images.githubusercontent.com/54523080/185256500-6ced332e-14e0-4d22-a995-bfa5810bc8f5.png)

#### Facebook

![image](https://user-images.githubusercontent.com/54523080/185256585-206b7939-a658-4510-9d1b-0e2342250e5d.png)

After selecting the type Facebook you need to enter a value for every field:

- Post: A URL you want to share in facebook.

![image](https://user-images.githubusercontent.com/54523080/185256640-0290be9c-d007-43c4-9d1a-141a1a31f712.png)
