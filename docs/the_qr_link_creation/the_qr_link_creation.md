# How to create a QR code

[The QR Link](https://www.theqr.link/) is a feature of [Ebanux Marketplace](https://www.ebanux.com/) that facilitates the design of QR codes which can be used for multiple purposes. It is available at https://app.theqr.link/

![image](https://user-images.githubusercontent.com/54523080/202235267-527a1e6f-745b-4722-a3e8-e284280f3441.png)

Although you can start creating static QR codes without sign in or even without register for an account, it's better if you sign in before creating a QR code. To see the benefits of getting authenticated you should read the section [Registration](registration.md). To sign in press the Login button at the top right.

![image](https://user-images.githubusercontent.com/54523080/202235752-dee0bc63-6a29-455f-aab5-2da8404e1cfa.png)

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

First of all, you must make a choice of creating a Dynamic QR code or an Static QR code.

![image](https://user-images.githubusercontent.com/54523080/202253533-3e3e8415-ae9a-474e-aa59-a7e9f77290b7.png)

When you generate a QR code, it's better if you use a **Dynamic QR code** instead of a static one. The Dynamic QR code is associated to a **Short Link** which provides two advantages: 

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

![image](https://user-images.githubusercontent.com/54523080/202254370-cc951174-3895-44b7-b493-323cb1a2cbd4.png)

1- Select the QR type

2- Enter the QR content

3- Design the QR code

The buttons Back and Next allow you to navigate between the different steps.

![image](https://user-images.githubusercontent.com/54523080/202282021-1af39fcd-35e5-46b3-b4be-9918b3c8396e.png)

The next sections explain how to create the QR code. 

### Select the QR type

At first you need to select the type of QR code you want to create, for example a QR code that links a website. Then click Next.

![image](https://user-images.githubusercontent.com/54523080/202282654-b9cf6e55-6275-45b6-b7d5-0e265ec1bc66.png)

### Enter the QR content

Then you will need to enter the QR Name, which can be useful for managing your QR codes in the Admin view and some information according to the type of QR you want to create. For example, in the case of QR for linking to a website URL you just need to enter the QR name and the URL. You can find the explanation about the data to be defined for every type of QR code in the section [How to create different types of QR codes](#how-to-create-different-types-of-qr-codes)

![image](https://user-images.githubusercontent.com/54523080/202283045-9960074e-9ee2-4c05-9381-4f50ab7e1e8e.png)

After entering the QR content, you need to customize it. You should review the QR data before pressing the button Next. The customization is similar regardless the type of QR code and you can learn how to do that in the next section.

### Customize your QR Codes

After pressing the Next button, the QR Designer view is shown. 

![image](https://user-images.githubusercontent.com/54523080/194682495-e0113a7a-a5b2-4d33-a9d3-ba0c13fa56f5.png)

The body section allows you to customize the shape and color of the four elements related to the code: the code itself, the corners, the corner dots and the background. The location of this four elements is shown below.

![image](https://user-images.githubusercontent.com/54523080/191153069-48a61d29-b288-472b-be07-f392b7ebc814.png)

The picture below shows the values we set in the QR code used as an example.

![image](https://user-images.githubusercontent.com/54523080/194670115-b69801a6-3bd7-4ae1-a1f9-8d22eeff88d1.png)

The picture above shows the three corners in the same color and the three corner dots in the same color. However, you can enable different colors for every corner or/and different colors for every corner dot by turning true the switch button Distinct color. The picture below shows the process of setting different colors for the corners. For setting different colors to the corners dot, the process is similar, you just need to turn true the switch button Distinc colors associated to the corner dots. Setting different colors for every corner and corner dot could be used to gain the user attention, but you should use the feature carefully to avoid a lack of uniformity in the design.

![image](https://user-images.githubusercontent.com/54523080/194670266-476c86c1-4a74-42ff-8ebe-b2f58c9f5869.png)

The example of code shows a background with solid color in white, but you can also set a bakground image by changing the bakground type to image, as shown below.  You should use the background image feature carefully because the image could introduce noises in the code and turn it unreadable. You also should be advised that there is a limit of 50 KB for the background image.

![image](https://user-images.githubusercontent.com/54523080/194670382-d726ea84-9eff-4b9b-81a2-5f324ff4d61f.png)

The frames section allows you to decide the type of frame surrounding the code. The picture below shows a code with no frame.

![image](https://user-images.githubusercontent.com/54523080/194670471-d6a3d663-f55d-4445-ac13-daa60a3eb6ed.png)

The picture below show the result of selecting a simple frame.

![image](https://user-images.githubusercontent.com/54523080/194670583-ca026124-ecf0-4060-b3a9-8a4e6f3e062b.png)

Some types of frame contains both a frame and a call to action text, like the one in the picture below

![image](https://user-images.githubusercontent.com/54523080/194670651-5fdd763b-bdd2-486a-892c-bcd954229f07.png)

And you can select other types of frames with a more creative design, as shown below. Since it's a design related to the add to cart action, we are not using it in the further examples.

![image](https://user-images.githubusercontent.com/54523080/194670906-6f53a2ad-4d1b-4820-8f58-ab29cbb6be7f.png)

When you select a type of frame, you can also customize the color for both the frame and the text. The text can be also edited, we set "SCAN ME" in the case of the example below. The "Text up" switch button allows to choose between placing the text above or bellow the code.

![image](https://user-images.githubusercontent.com/54523080/194670973-a85afef1-2eff-4446-b980-f39a5acdd43b.png)

The logo section allows to select the logo to be set in the center of the code. The default option is No Logo.

![image](https://user-images.githubusercontent.com/54523080/194671174-fb1101f8-3eac-4542-9114-a7bba5c49094.png)

The picture below shows a design where a predefined logo has been selected.

![image](https://user-images.githubusercontent.com/54523080/194671293-fad8b72f-cec4-4a05-98cc-cd6fbac1ee20.png)

However you can select a customized image by pressing the Upload button. In the example below the Cenit IO logo has been selected. You should be advised that there is a limit of 30 KB for the logo image.

![image](https://user-images.githubusercontent.com/54523080/194671399-54ed8508-f1d6-4460-9871-683d7700ee8f.png)

### Checking for Readability

When designing a QR code it's important to test the code to check its behavior in two ways:

- Its content is correct, so when you scan it you get the result as expected.

- It is easy to read by different devices and apps.

The best way of checking the code's readability is to use different scan devices and apps and try to read it with every device and app. However, it's better if we let you now the probability of your code to be readable or not. So, anytime in the designing process, you can press the button Check for Readability  as shown below.

![image](https://user-images.githubusercontent.com/54523080/194671474-083a4ff3-9e70-4dbb-bd39-32f42448ffd2.png)

After pressing the button, a flash notification announces whether the code is probably readable or not. In the case of the example the notification lets you know the code has a high chance to be readable as you can see in the picture below.

![image](https://user-images.githubusercontent.com/54523080/194671538-3e77cb48-5d16-48a2-b2cb-25c8c13701c1.png)

If we change the background color and press the button Check Readability again, the notification alerts that there is a low chance to read that code well, as you can see in the picture below. So, you should take care about the contrast between the code and the background.

![image](https://user-images.githubusercontent.com/54523080/194671606-37e2ea0b-3d7c-4409-a300-54288dd09e49.png)

The design in the picture above looks like unpleasant and most of all, it's probably unreadable. So if we change the background color to white and check for readability again, we will see the high probability notification again, as shown below.

![image](https://user-images.githubusercontent.com/54523080/194671676-eb896ae1-4371-40d8-bfd5-57c094dfae46.png)

### Download and Share it

After completing the customization you can press the Download button to export the QR code to be shared later. When you are working as an authenticated user, you can save the QR code and export it later. When you didn't sign in before designing your QR code, you need to export it or you lose your design when you finish.

![image](https://user-images.githubusercontent.com/54523080/194671761-ee35ec3d-d747-4537-acd7-668321e9994f.png)

If you select PNG the code can be download as an image that can be shared by sending  it as an email attachment or in a chat conversation, etc.

![image](https://user-images.githubusercontent.com/54523080/194671827-f3b59846-b3d4-4e45-8429-176a18a0a2f2.png)

You should use the SVG type if you want to embed the code in a webpage.

![image](https://user-images.githubusercontent.com/54523080/194671891-78993bcb-e09e-403d-a0c8-204f2758cfc5.png)

If you want to print the code for sharing a hard copy between customers or if you need to atach a printed code to a product to be sold, shipped or mailed, you probably prefer to use the option pdf.

![image](https://user-images.githubusercontent.com/54523080/194671944-6ae2db8b-2111-40aa-93e0-aca45b5c6fcc.png)

After selecting the pdf type you can customize the pdf as shown below

![image](https://user-images.githubusercontent.com/54523080/191160309-f7fb9f6c-2692-4fcf-8d59-86ed9899f1c9.png)

After pressing the Download PDF button the pdf file is saved.

![image](https://user-images.githubusercontent.com/54523080/191160594-487b0ac2-0f79-4bbd-baff-07c2e2745809.png)

Finally, if you are working as an authenticated user, you can save your QR code, no mater if it is an Static or a Dynamic one, by pressing the button Save.

![image](https://user-images.githubusercontent.com/54523080/194672001-0efd5e08-1348-4f1d-b494-ec748c2133ab.png)

After saving the QR code, you can see its details in the admin view: its create and update dates, its type, which is web in the case of the example and a tag that lets you know if it's statis or dynamic.

![image](https://user-images.githubusercontent.com/54523080/202284092-25dade97-def5-422d-af4e-936d7efc70ea.png)

### How to create different types of QR codes

The section [Select the QR type](#select-the-qr-type) explains that the first step for creating a QR code is to select the type of QR code you want to generate. Depending on the type of QR code you must enter different information related to the code. The Static QR code for a website URL was explained before. If you want to know the details about creating other types of QR codes you should read the sections [Static QR codes](static_qr_codes.md) and [Dynamic QR codes](dynamic_qr_codes.md)
