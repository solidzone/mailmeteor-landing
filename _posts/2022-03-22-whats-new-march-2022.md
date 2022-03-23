---
layout: blogpost
title: "What's new? Import all your unsubscribers, fallback & more"
description: "We have recently added dozens of new features to Mailmeteor, both in our Google Sheets add-on and in the dashboard. While we generally don't make release notes like this, we have made so many improvements in the past weeks that I felt like we had to talk about it."
cta_title: Send emails that get replies with Mailmeteor
canonical: https://mailmeteor.com/blog/whats-new-march-2022
category: NEWS

meta_author: Corentin Brossault
meta_author_link: 'https://twitter.com/frenchcooc'
meta_image: '/assets/img/blog/warm-up-tools/gmail-warmup.png'

og_title: "What's new? Import all your unsubscribers, fallback & more"
og_description: "We have recently added dozens of new features to Mailmeteor, both in our Google Sheets add-on and in the dashboard. While we generally don't make release notes like this, we have made so many improvements in the past weeks that I felt like we had to talk about it."
og_url: https://mailmeteor.com/blog/whats-new-march-2022
og_image: https://mailmeteor.com/assets/img/opengraph/whats-new-march-2022.jpg

meta_date_published: 'March 23, 2022'

breadcrumb:
  - name: Blog
    link: /blog/
  - name: What's new? Import all your unsubscribers, fallback & more

permalink: /blog/whats-new-march-2022
---

Thanks to all the feedback from our users, we have recently added dozens of new features to Mailmeteor, both in our Google Sheets add-on and in the dashboard.

We have made so many improvements in the past weeks that I felt like we had to talk about it. Unfortunately, I won't be able to list all the features and improvements that have been made recently to Mailmeteor. There are so many of them 😅. So here are the features that I'd like to share with you:

1. [Select a Google Sheets in the Dashboard](#select-a-google-sheets-in-the-dashboard)
1. [Filter emails by opens/clicks](#filter-emails-by-opensclicks)
1. [Set fallback to variables](#set-fallback-to-variables)
1. [Import unsubscribers](#import-unsubscribers)
1. [One-click unsubscribe](#one-click-unsubscribe)

## Select a Google Sheets in the Dashboard

Mailmeteor started initially as a [Google Sheets add-on](https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301). And until recently, it was the only way for our users to send emails with us. Last year, we started working on a [dashboard](https://dashboard.mailmeteor.com) to help our customers manage their billing details, such as downloading invoices.

Then, time passing, we decided to bring even more to the dashboard. A few months ago, we added the possibility to send campaigns from a CSV file or by simply copying/pasting a mailing list.

Today, we are going one step further toward making our dashboard a **complete and standalone email marketing solution** for Gmail.

<video autoplay muted loop playsinline>
  <source src="/assets/video/blog/whats-new-march-2022/dashboard-select-google-sheets.mp4">
</video>

Uploading your mailing list right from a Google Sheets is a free feature that is now out of beta. In a way, it's a full circle around the Google Sheets product that all of our users are familiar with.

## Filter emails by opens/clicks

In line with making our dashboard a complete email marketing tool, more and more users have started to ask us for a way to download emails that have been opened, clicked, unsubscribed, and more.

<video autoplay muted loop playsinline>
  <source src="/assets/video/blog/whats-new-march-2022/dashboard-filter-emails.mp4">
</video>

## Set fallback to variables

From the ground up, Mailmeteor has always offered a way to personalize emails. It's so tied to mail merge solutions. For example, if you have the first name of your recipients in your mailing list, you could personalize your emails to start like that:

```
{% raw %}Hi {{ firstname }}, {% endraw %}
```

But most of the time, mailing lists aren't completely perfect. You might miss the first name of some recipients. Or it's the ``{{ company }}`, or any other field that you want to use in your email. In these particular cases, we are introducing the concept of "fallback". Here's what it looks like:

```
{% raw %}Hi {{ firstname | there }}, {% endraw %}
```

It's a small change. But it will make life so much easier for all of our users. It's available right now, both for users of the Google Sheets add-on as well as in the dashboard.

## Import unsubscribers

Importing unsubscribers is a feature that has been requested a lot by people used to emailing platforms. When it's been years since you sent your first newsletter, you start to accumulate a list of unsubscribers. And in a way, the better you are at emailing, the shorter the list is...

For all these people, we have just released a way to [import all of your unsubscribers](https://dashboard.mailmeteor.com/unsubscribers).

[![Import unsubscribers from Mailmeteor's dashboard](/assets/img/blog/whats-new-march-2022/dashboard-import-unsubscribers.png)](https://dashboard.mailmeteor.com/unsubscribers)

By adding email addresses to your unsubscribers list, Mailmeteor will make sure that emails aren't sent to these people. You don't need to filter your mailing list beforehand, we just take care of it.

_PS: just in case you believe you have too many unsubscribers, make sure to look at our [tips on sending emails like a boss](/blog/emailing-like-a-boss) 😎_

## One-click unsubscribe

In line with the import feature that I have just mentioned, we have released a new "One-click unsubscribe" option in the dashboard. If you enable this option, your recipients will have the opportunity to unsubscribe from your mailing list in just one click. That's a feature supported by Gmail which looks like this:

![One-click unsubscribe in Gmail](/assets/img/blog/whats-new-march-2022/one-click-unsubscribe-gmail.jpg)

Adding a one-click unsubscribe option makes it easier for your recipients to unsubscribe from your mailing list, _instead of flagging your emails as spam_. Being flagged as spam will negatively impact your email reputation, while unsubscribes don't.

Bear in mind that you can still add an unsubscribe link in the body of your email - generally found at the bottom ([here's how to do it](https://support.mailmeteor.com/introduction/advanced/unsubscribe-link)). Both features work together.

## What's next?

We have much more features to come. So [feel free to share with us your feedback](https://forms.gle/JcDxU5RTDUEdhwHD6) and we will make sure to prioritize what's next. For the most curious of you, the next feature that we are going to release is [visible right here](https://twitter.com/mailmeteor/).

TODO: Lien vers Twitter : "A sneak peek of what we are working on... [avec une image du followup sur Google Sheets]" + un reply. Want to know more? Make sure to be the first to get your hands on it. --

<div class="blogpost-endnote">
  <p>This guide was written by Corentin Brossault, Co-founder & CTO at <a href="/">Mailmeteor</a>. Mailmeteor is a simple & privacy-focused emailing platform. Trusted by millions of users worldwide, it is often considered as the best Gmail mail merge to send mass personalized emails. Give us a try and let us know what you think!</p>

  <p>➤ <a href="/" class="font-weight-bold">Start sending mass emails in Gmail with Mailmeteor</a></p>
</div>
