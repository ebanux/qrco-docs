# The QR Link Creation

[The QR Link](https://www.theqr.link/) is a feature of [Ebanux Marketplace](https://www.ebanux.com/) that facilitates the design of QR codes which can be used for multiple purposes. It is available at https://app.theqr.link/

![image](https://user-images.githubusercontent.com/54523080/191096128-bb3e7e82-7bdc-4997-9126-771fd8f2cd72.png)

Although you can start creating static QR codes without sign in or even without register for an account, it's better if you sign in before creating a QR code. To see the benefits of getting authenticated you should read the section [Registration](registration.md). To sign in press the Login button at the top right.

![image](https://user-images.githubusercontent.com/54523080/191101869-a7d29ad9-b5ac-4675-8bdf-501cfb67e0d5.png)

## How to create a QR code

Generating a QR code with The QR Link is very easy, you just need to follow three simple steps:

**1- Choose the type of QR Code**

Select from URL, Plain Text, vCard, SMS, Email, Twitter, WiFi and more.

**2- Enter the data according to the type of QR**

Enter all the info which is needed to generate de QR code. The data varies depending on the type of your QR type.

**3- Customize your QR Code** 

Design your QR code with custom shapes, colors and frames.

### Create the QR code

When an authenticated user access The QR Link, the admin view is shown. To create a QR code you need to press the button Create QR.

![image](https://user-images.githubusercontent.com/54523080/194091259-7fb6a779-c463-47d0-a2d5-fbb3027d4c80.png)

First of all, you must make a choice of creating a Static QR code or a Dynamic QR code.

![image](https://user-images.githubusercontent.com/54523080/191141271-6685c5e3-8bfc-4d28-b416-d33a3c4e5e7c.png)

When you generate a QR code, it's better if you use a **Dynamic QR code** instead of a static one. The Dynamic QR code is associated to a **Short Link** which provides two improvements: 

- a code less dense 

- the same code can be used to link different URLs

***A code less dense***

When you need to link a long URL the QR code might become dense. So, it's better if you use a short link instead and, as a result, you can generate a less dense code.

For example let's suppose we create a Dynamic QR code and, as a result, a short URL https://qrco.sh/a4Y7bO for the static URL https://docs.cenit.io/docs/basic_integration is created. If we also create a Static QR code for the static URL https://docs.cenit.io/docs/basic_integration,  we can compare both solutions. The image below shows the difference between the QR codes. As you can see, the Dynamic QR code with the short URL is simpler than the Static QR with the static URL which is longer than the short link. A less dense code is easier to read so you should choose to create Dynamic codes instead of Static ones.

![image](https://user-images.githubusercontent.com/54523080/183731130-2758cb15-d4e4-42e0-ad3e-10b8ec3ec730.png)

***The same code can be used to link different URLs***

Since a **Dynamic QR code** can be edited, a dynamic URL can be defined, so the same short link can be initially linked to a target URL and you may change the target URL later. For example let's suppose we create a Dynamic QR code, then a short URL is associated to it: https://qrco.sh/a4Y7bO for the target URL https://docs.cenit.io/docs/basic_integration. Later we can edit the QR code and change the target URL associated to it from https://docs.cenit.io/docs/basic_integration to https://docs.cenit.io/docs/intro. That means the same short link https://qrco.sh/a4Y7bO and consequently, the Dynamic QR code, now is linked to https://docs.cenit.io/docs/intro.

If we create the QR for the short link, no matter what target URL the short link is associated to, the QR code will lead you to one URL or another depending on the current target URL. The picture below explains this example. At first the QR code leads you to the webpage https://docs.cenit.io/docs/basic_integration, but after editing the Dynamic QR code  and changing the target URL associated to the short link, the same QR code will lead you to the webpage https://docs.cenit.io/docs/intro. This feature is useful when you want to reuse a code you have already shared or printed.

![image](https://user-images.githubusercontent.com/54523080/183738323-463f305c-5e1f-406a-92a4-85184427afb6.png)

No matter the type of QR code you want to create, the UI guide you through three steps:

![image](https://user-images.githubusercontent.com/54523080/191144023-48744710-ff82-4833-ac5c-de72f1b4ff51.png)

1- Select the QR type

2- Enter the QR content

3- Design the QR code

The buttons Back and Next allow you to navigate between the different steps.

![image](https://user-images.githubusercontent.com/54523080/191144717-b1f985ed-dd72-475e-b182-656c2f9377a5.png)

The next sections explain how to create the QR code. 

### Select the QR type

At first you need to select the type of QR code you want to create, for example a QR code that links a website. Then click Next.

![image](https://user-images.githubusercontent.com/54523080/191148174-7a612a18-ab6c-41f9-9bc6-223b2816fcb1.png)

### Enter the QR content

Then you will need to enter the QR Name, which can be useful for managing your QR codes in the Admin view and some information according to the type of QR you want to create. For example, in the case of QR for linking to a website URL you just need to enter the URL. You can find the explanation about the data to be defined for every type of QR code in the section [How to create different types of QR codes](#how-to-create-different-types-of-qr-codes)

![image](https://user-images.githubusercontent.com/54523080/191148864-d12a5995-efd4-4cda-9820-66873b649e52.png)

After entering the QR content, you need to customize it. You should review the QR data before pressing the button Next. The customization is similar regardless the type of QR code and you can learn how to do that in the next section.

### Customize your QR Codes

After pressing the QR Editor button, the QR Designer view is shown. 

![image](https://user-images.githubusercontent.com/54523080/191152475-c7274b25-42af-4358-8a4f-0f6dcc4c2819.png)

The body section allows you to customize the shape and color of the four elements related to the code: the code itself, the corners, the corner dots and the background. The location of this four elements is shown below.

![image](https://user-images.githubusercontent.com/54523080/191153069-48a61d29-b288-472b-be07-f392b7ebc814.png)

The picture below shows the values we set in the QR code used as an example.

![image](https://user-images.githubusercontent.com/54523080/191153910-3fac6fdd-54c7-403e-a107-e3c2dad5bb73.png)

The picture above shows the three corners in the same color and the three corner dots in the same color. However, you can enable different colors for every corner or/and different colors for every corner dot by turning true the switch button Distinct color. The picture below shows the process of setting different colors for the corners. For setting different colors to the corners dot, the process is similar, you just need to turn true the switch button Distinc colors associated to the corner dots. Setting different colors for every corner and corner dot could be used to gain the user attention, but you should use the feature carefully to avoid a lack of uniformity in the design.

![corners](https://user-images.githubusercontent.com/54523080/191155232-467c3b0a-5897-42f7-9040-fa10e4670462.png)

The example of code shows a background with solid color in white, but you can also set a bakground image by changing the bakground type to image, as shown below.  You should use the background image feature carefully because the image could introduce noises in the code and turn it unreadable. You also should be advised that there is a limit of 50 KB for the background image.

![image](https://user-images.githubusercontent.com/54523080/191155815-0eac738a-f235-4270-bbd8-a8ed4e620de1.png)

The frames section allows you to decide the type of frame surrounding the code. The picture below shows a code with no frame.

![image](https://user-images.githubusercontent.com/54523080/191156108-42558c0c-ac8d-43e1-9909-6dcdf231f6bb.png)

The picture below show the result of selecting a simple frame.

![image](https://user-images.githubusercontent.com/54523080/191156679-d99b935a-d53d-4709-8cf6-41f0d918d6a4.png)

Some types of frame contains both a frame and a call to action text, like the one in the picture below

![image](https://user-images.githubusercontent.com/54523080/191156936-dfdbadc9-c7da-41a2-b906-a7091078c94e.png)

And you can select other types of frames with a more creative design, as shown below. Since it's a design related to the add to cart action, we are not using it in the further examples.

![image](https://user-images.githubusercontent.com/54523080/191157085-f51acd93-2382-4d41-85ec-c02361a85323.png)

When you select a type of frame, you can also customize the color for both the frame and the text. The text can be also edited, we set "SCAN ME" in the case of the example below. The "Text up" switch button allows to choose between placing the text above or bellow the code.

![image](https://user-images.githubusercontent.com/54523080/191157369-75d0329e-0321-4986-a431-b85514da114b.png)

The logo section allows to select the logo to be set in the center of the code. The default option is No Logo.

![image](https://user-images.githubusercontent.com/54523080/191157502-86631caa-70e6-43c4-985c-74625cb7c4f7.png)

The picture below shows a design where a predefined logo has been selected.

![image](https://user-images.githubusercontent.com/54523080/191157718-c1ba4a9b-32ef-4e7f-9385-12e11300d21b.png)

However you can select a customized image by pressing the Upload button. In the example below the Cenit IO logo has been selected. You should be advised that there is a limit of 30 KB for the logo image.

![image](https://user-images.githubusercontent.com/54523080/191157911-91fc3808-c546-4e35-9068-847f5efbe99d.png)

### Checking for Readability

When designing a QR code it's important to test the code to check its behavior in two ways:

- Its content is correct, so when you scan it you get the result as expected.

- It is easy to read by different devices and apps.

The best way of checking the code's readability is to use different scan devices and apps and try to read it with every device and app. However, it's better if we let you now the probability of your code to be readable or not. So, anytime in the designing process, you can press the button Check for Readability  as shown below.

![image](https://user-images.githubusercontent.com/54523080/191158261-1dcbd2e1-a7e2-4c67-bf2f-70c302c29d7d.png)

After pressing the button, a flash notification announces whether the code is probably readable or not. In the case of the example the notification lets you know the code has a high chance to be readable as you can see in the picture below.

![image](https://user-images.githubusercontent.com/54523080/191158452-c88cbc57-2dd3-45ee-95b9-77f822c2784b.png)

If we change the background color and press the button Check Readability again, the notification alerts that there is a low chance to read that code well, as you can see in the picture below. So, you should take care about the contrast between the code and the background.

![image](https://user-images.githubusercontent.com/54523080/191158841-634fd26e-2185-4bd1-8465-82f9da62f50e.png)

The design in the picture above looks like unpleasant and most of all, it's probably unreadable. So if we change the background color to white and check for readability again, we will see the high probability notification again, as shown below.

![image](https://user-images.githubusercontent.com/54523080/191158970-158cbfed-1462-4076-997e-01e60d3f2328.png)

### Download and Share it

After completing the customization you can press the Download button to export the QR code to be shared later. When you are working as an authenticated user, you can save the QR code and export it later. When you didn't sign in before designing your QR code, you need to export it or you lose your design when you finish.

![image](https://user-images.githubusercontent.com/54523080/191159254-6bea9e81-96fc-46cd-848f-376f184664c7.png)

If you select PNG the code can be download as an image that can be shared by sending  it as an email attachment or in a chat conversation, etc.

![image](https://user-images.githubusercontent.com/54523080/191159867-bd200667-29f1-4238-a1b2-846469f45924.png)

You should use the SVG type if you want to embed the code in a webpage.

![image](https://user-images.githubusercontent.com/54523080/191159984-bc4e9630-28b5-4c8b-96c3-142343a58cfb.png)

If you want to print the code for sharing a hard copy between customers or if you need to atach a printed code to a product to be sold, shipped or mailed, you probably prefer to use the option pdf.

![image](https://user-images.githubusercontent.com/54523080/191160017-1fafd381-ffbc-42df-a0e2-a13cccffc10e.png)

After selecting the pdf type you can customize the pdf as shown below

![image](https://user-images.githubusercontent.com/54523080/191160309-f7fb9f6c-2692-4fcf-8d59-86ed9899f1c9.png)

After pressing the Download PDF button the pdf file is saved.

![image](https://user-images.githubusercontent.com/54523080/191160594-487b0ac2-0f79-4bbd-baff-07c2e2745809.png)

Finally, if you are working as an authenticated user, you can save your QR code, no mater if it is an Static or a Dynamic one, by pressing the button Save.

![image](https://user-images.githubusercontent.com/54523080/191160974-357c8e49-97f3-425c-af5e-727702b06450.png)

After saving the QR code, you can see its details in the admin view: its create and update dates, its type, which is web in the case of the example and a tag that lets you know if it's statis or dynamic.

![image](https://user-images.githubusercontent.com/54523080/191161585-777de859-4fb5-493f-9b20-70ab1954c3a3.png)

### How to create different types of QR codes

The section [Select the QR type](#select-the-qr-type) explains that the first step for creating a QR code is to select the type of QR code you want to generate. Depending on the type of QR code you must enter different information related to the code. The type of QR code for a website URL was explained before. Now you can check the details about creating other types of QR codes.

#### Email

![image](https://user-images.githubusercontent.com/54523080/191161904-6678cadb-385e-41cb-b8ab-3f9b044aaf70.png)

After selecting the type Email you need to enter a value for every field:

- Email: the email address

- Subject: the email subject

- Body: the email message

#### SMS

![image](https://user-images.githubusercontent.com/54523080/191162105-8b713f6b-b5d1-4d74-aedf-305a7733fac6.png)

After selecting the type SMS you need to enter a value for every field:

- Number: the cellphone number

- Message: the short message

#### VCard

![image](https://user-images.githubusercontent.com/54523080/191162278-dad3a8d7-988a-4b2c-be2b-ba17d2009980.png)

After selecting the type VCard you need to enter a value for every field related to the contact. You must enter at least the contact name.

#### Text

![image](https://user-images.githubusercontent.com/54523080/191162634-6993fb49-6f3e-42a2-819f-7083d6046032.png)

After selecting the type Text you need to enter a value for every field:

- Message: a plaintext message (emojis are not allowed).

#### WiFi

![image](https://user-images.githubusercontent.com/54523080/191162730-e530f65e-26ee-4d45-853a-07a3537ee4a4.png)

After selecting the type WiFi you need to enter a value for every field:

- Name: the SSID of the Wifi network

- Encription: the encription type

- Password: the Wifi password (optional)

#### Twitter

![image](https://user-images.githubusercontent.com/54523080/191162897-551aff87-6782-4814-a650-c0807c6e1568.png)

After selecting the type Twitter you need to enter a value for every field:

- Text:  the tweet content.
- Mention: a username to be targeted in your tweet (without the @ symbol)
- Hashtags: a comma separated list of hashtags to be included in the tweet (without the # symbol)
- URL: an URL to be shared in the tweet

All the elements are grouped in the tweet in the order: Text, URL, Hashtags, Mention. 

#### Whatsapp

![image](https://user-images.githubusercontent.com/54523080/191163008-52331295-b90f-47d5-a172-c19a97289e7d.png)

After selecting the type Whatsapp you need to enter a value for every field:

- The cellphone number registered in whatsapp, including the contry code, for example +1.
- Message: The whatsapp message (may include emojis)

#### Facebook

![image](https://user-images.githubusercontent.com/54523080/191163162-f46c490b-06c9-4ab3-802b-9d6d96b5b36e.png)

After selecting the type Facebook you need to enter a value for every field:

- Post: A URL you want to share in facebook.
