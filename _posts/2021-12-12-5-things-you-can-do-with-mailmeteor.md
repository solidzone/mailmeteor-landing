---
layout: blogpost
title: 'Mailmeteor: 5 Features You Need To Know'
description: From sending multiple mail merge within the same sheet to AB testing, there are advanced features of Mailmeteor that you should definitely learn about.
cta_title: Try the best tool to send mass emails with Gmail.
canonical: https://mailmeteor.com/blog/5-things-you-can-do-with-mailmeteor
category: TUTORIAL

meta_author: Corentin Brossault
meta_author_link: 'https://twitter.com/frenchcooc'
meta_image: >-
  /assets/img/blog/5-things-you-can-do-with-mailmeteor/mailmeteor-features.png
og_title: "5 things you didn't knew you can do with Mailmeteor"
og_description: From sending multiple mail merge within the same sheet to AB testing, there are advanced features of Mailmeteor that you should definitely learn about.
og_url: https://mailmeteor.com/blog/5-things-you-can-do-with-mailmeteor
og_image: https://mailmeteor.com/assets/img/opengraph/5-features.wepb

meta_date_published: 'December 12, 2021'
# meta_date_lastupdated: "December 12, 2021"

breadcrumb:
  - name: Blog
    link: /blog/
  - name: 5 Features You Need To Know

permalink: /blog/5-things-you-can-do-with-mailmeteor
---

Mailmeteor has been designed from the ground up to be used by everyone. It's no mistake that it has been ranked the [best mail merge for Gmail](/best-google-apps/mail-merge-gmail), thanks to thousands of customers reviews.

Yet, there are some features that we found out only a small portion of our users know about. So, in this post, I'm going to showcase 5 features that you should definitely try out in your next mail merge (and they are all free to use!).

## Tip #1. Send multiple campaigns in the same sheet

If you send emails several times a year to your mailing list, for example every holidays season (in Christmas, in spring,
in Summer, etc.), you can do it very easily with Mailmeteor.

Just open your mailing list sheet and send emails right from it. Mailmeteor will add a new Merge status column to show you the status of the emails you just sent.

[![Image of multiple merge status columns in Google Sheets](/assets/img/blog/5-things-you-can-do-with-mailmeteor/multiple-merge-status.png){:width="600px" height="323px"}](https://docs.google.com/spreadsheets/d/165moV12ypcN8A61k8rIr-OSnTimD7zJAfk8Jp9DXs1Y/edit#gid=448727038){:target="\_blank"}

Some of our users didn't know they can send multiple campaigns from the same sheet and they created a new sheet every time they wanted to send emails. But, there's no limit to the number of merges you can do in the same sheet so you should definitely keep the same sheet. [Look at this spreadsheet if you want to see an example.](https://docs.google.com/spreadsheets/d/165moV12ypcN8A61k8rIr-OSnTimD7zJAfk8Jp9DXs1Y/edit#gid=448727038)

## Tip #2. Segment your mailing list

A handy tip if you want to send emails to only a portion of your recipients is to segment of your mailing list. For example, you could send emails, only to:

- new registrations, if you manage a sport club.
- only students of a specific class, if you are a teacher.
- people living in Alabama, if you have an e-commerce store that delivers all around the USA.
- people that have opened or clicked in your previous emails, if you are doing sales and you want to follow-up with your prospects.

<div class="blogpost-note">
No matter how long your mailing list is or how many columns you have, there's one shimple thing to remember here: <strong>Mailmeteor sends emails only to visible rows of your spreadsheet.</strong>
</div>

So, whether you hide a row manually or you use the filters feature of Google Sheets, only recipients that you can see in your spreadsheet when you open Mailmeteor will receive an email.

You might wonder how to use filters in Google Sheets? This is exactly what I will show you next.

### How to hide a row in Google Sheets?

That one is really easy and takes a few steps:

1. Select a row by clicking on the row number.
2. Right-click on the row number.
3. Then, select **Hide row**.

Here's a very short video that hides the row number 5:

<div style="margin: 0 auto; text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_ShTZTTZAiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen lazy></iframe>
</div>

### How to apply filters in Google Sheet?

It takes a few more clicks to apply filters to a Google Sheets, compared to hiding a row. But it's really not that complicated. Here's how to do it:

1. Select all the columns of your sheet.
2. In the menu, select **Data** > **Create a filter**.
3. Now, click on the green filter icon in the column that you want to filter.
4. In the dropdown, unselect the values that you don't want to see.
5. Make sure to click on **OK** to apply the changes.

Here's a very short video that hides all rows having "EU" in the country column:

<div style="margin: 0 auto; text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ADOkQeCVmyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen lazy></iframe>
</div>

## Tip #3. Use the =HYPERLINK function

Google Sheets lets you add hyperlinks to your sheets, thanks to the `=HYPERLINK` formula. What it does is that it links one of your cell to a web page.

[![Example of using =HYPERLINK in a Google Sheets spreadsheet](/assets/img/blog/5-things-you-can-do-with-mailmeteor/google-sheets-add-hyperlink.png){:width="600px" height="292px"}](https://docs.google.com/spreadsheets/d/165moV12ypcN8A61k8rIr-OSnTimD7zJAfk8Jp9DXs1Y/edit#gid=139904977){:target="\_blank"}

The HYPERLINK function lets you add personalized links in your emails. For example, you can use it:

- to send personalized coupons code to your customers.
- to share a link to a personalized file that your customer can download.
- or if you are a Google Analytics expert, to use `?utm_source` parameters in your email.

With this in mind, let's give it a try together.

### How to use =HYPERLINK in Google Sheets?

Here's how to use the =HYPERLINK function in Google Sheets:

1. Click on a any cell of your spreadsheet.
2. Enter the following: `=HYPERLINK("https://mailmeteor.com","Mailmeteor")`
3. Make sure to replace the URL and the text with your own values :)

You can also use the Google Sheets menu to add links, just as follow:

1. Click on a cell of your sheet.
2. Make sure there is content in the cell.
3. Now click on **Insert** > **Link**.
4. Copy/paste the URL of the page that you want to link.

### How to use =HYPERLINK in Mailmeteor?

Once you have created your hyperlinks in Google Sheets, you can insert the link right into your email template. Let's see how to do it:

1. From your Google Sheets spreadsheet, open Mailmeteor.
2. Create a new template (or edit one).
3. Write the content of your email, for example:

    <div class="blogpost-endnote">
   <p>Hello {% raw %}{{ Firstname }}{% endraw %},</p>

   <p>I'm glad we could meet lately. As discussed, we are using a brand new mail merge solution called Mailmeteor.</p>

   <p>I’d love to let you see some of the features to get your feedback. We want to ensure Mailmeteor would actually help you do your job better at {% raw %}{{ Hyperlink }}{% endraw %}.</p>

   <p>Would you have 10-15 minutes free to chat? (I promise to keep the time!). Let me know the time that suits you best.</p>

   </div>

4. Click on your email where you want to insert the link.
5. Then, in the toolbar, click on **Select variable** and insert the variable **Hyperlink**.

<a href="https://docs.google.com/spreadsheets/d/165moV12ypcN8A61k8rIr-OSnTimD7zJAfk8Jp9DXs1Y/edit#gid=915575317" target="_blank">
    <video autoplay muted loop playsinline controls width="730" height="495">
        <source src="/assets/video/blog/5-things-you-can-do-with-mailmeteor/mailmeteor-add-hyperlink.mp4" />
    </video>
</a>

## Tip #4. Insert HTML in your email (such as tables or CTA)

You might have received some emails that look really apart. They have this well centered content, a great header image, and so on. If you don't know how these rich-emails are made, there's no magic, it's just HTML.

HTML is a language to design both a webpage and an email. And If you master HTML, you will be able to send really well designed emails. I'm not going to give you a course on HTML unfortunately. There are like millions of tutorials online if that's something you are interested in.

Though, I'm going to show you how you can insert an HTML snippet into your emails, using only Google Sheets and Mailmeteor. In this example we will insert a big blue button (aka a CTA for Call To Action) in your email.

Follow these steps to add a CTA in your own email:

1. Open your Google Sheets spreadsheet and insert a new column (you can copy that sheet if you prefer)
2. Entitle the new column like this **CTA** which stands for call to action.
3. In the cell underneath, copy/paste the following:

   `<a href="https://example.org" style="text-decoration: none; padding: 0.5rem 1rem; background: blue; border-radius: 4px; color: white;">Book a meeting</a>`

4. Duplicate the content of the cell to all your recipients.
5. Now open Mailmeteor and create a new email template (or edit one).
6. Write the content of your email, for example:

    <div class="blogpost-endnote">
   <p>Hello {% raw %}{{ Firstname }}{% endraw %},</p>

   <p>I'm glad we could meet lately. As discussed, we are using a brand new mail merge solution called Mailmeteor.</p>

   <p>I’d love to let you see some of the features to get your feedback. We want to ensure Mailmeteor would actually help you do your job better at {% raw %}{{ Company }}{% endraw %}.</p>

   <p>Would you have 10-15 minutes free to chat? (I promise to keep the time!). You can book a demo right below:</p>

   <p>{% raw %}{{ CTA }}{% endraw %}</p>

   </div>

7. Now, where you want to insert your CTA, click on **Insert variable** > **CTA**

Once your template is saved, open the preview, and you should see something like this:

[![Sending a mail merge with a Call-To-Action](/assets/img/blog/5-things-you-can-do-with-mailmeteor/mailmeteor-cta.png)](https://docs.google.com/spreadsheets/d/165moV12ypcN8A61k8rIr-OSnTimD7zJAfk8Jp9DXs1Y/edit#gid=2066196251){:target="\_blank"}

## Tip #5. A/B testing

I've already talked about that one in a previous article, but I'd like to share it with you again, because it's so powerful.

A/B testing means that you want to send slight variation of your email, to understand which one works the best. It's really helpful for marketing team and salespeople that want to outperfom.

Basically, to create an A/B test, you'll have to split your mailing list (or just a portion of it) into two different groups. The group A. And the group B. Then for each group, you will use personalization to try out the variation.

[![Demo spreadsheet in Google Sheets to send an AB test](/assets/img/blog/how-to-ab-test/ab-test-demo-spreadsheet.png){:width="600px" height="360px"}](/blog/how-to-ab-test-gmail)

Using the tracking report (which is a paid feature, just to let you know), you can determine easily which variation has performed the better. But even without the tracking, you can determine how much replies you received and then conclude which variation you should focus on.

If you are interested in A/B testing, have a look at this in-depth tutorial on [how to A/B test in Gmail](/blog/how-to-ab-test-gmail).

<div class="blogpost-endnote">
  <p>This article was written by Corentin Brossault, <a href="https://mailmeteor.com">Mailmeteor</a>'s co-founder. Mailmeteor is a simple & privacy-focused emailing software. Trusted by millions of users worldwide, it is often considered as the best Gmail mail merge to send mass personalized emails. Give us a try and let us know what you think!</p>

  <p>➤ <a href="https://mailmeteor.com" class="font-weight-bold">Start sending mass emails in Gmail with Mailmeteor</a></p>
</div>

<script></script>
