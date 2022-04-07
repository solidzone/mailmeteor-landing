---
layout: blogpost
title: 'How to send an A/B test in Gmail?'
description: In this tutorial, you'll learn how to send an AB test in Gmail. Using Google Sheets and Mailmeteor, we will guide you step-by-step on how to test different subject lines or different words/sentences in your email's body.
cta_title: Start an A/B test right now with Mailmeteor
canonical: https://mailmeteor.com/blog/how-to-ab-test-gmail
category: TUTORIAL

meta_author: Corentin Brossault
meta_author_link: 'https://twitter.com/frenchcooc'
meta_image: '/assets/img/blog/how-to-ab-test/ab-test-gmail.png'

og_title: 'How to send an A/B test in Gmail?'
og_description: In this tutorial, you'll learn how to send an AB test in Gmail. Using Google Sheets and Mailmeteor, we will guide you step-by-step on how to test different subject lines or different words/sentences in your email's body.
og_url: https://mailmeteor.com/blog/how-to-ab-test-gmail
og_image: https://mailmeteor.com/assets/img/opengraph/AB-test-gmail.wepb

meta_date_published: 'October 26, 2021'
# meta_date_lastupdated: "October 26, 2021"

published: true

breadcrumb:
  - name: Blog
    link: /blog/
  - name: How to send an A/B test in Gmail?

permalink: /blog/how-to-ab-test-gmail
---

The best marketing team are well known for fine-tuning their emails a lot. Their emails looks perfect when you receive one of them. But what you might not know, it's that they literally have tested every single word in the email.

**A/B testing is the process of trying different combinations of an email to determine and pick the one that performs the best** - for examples the one that gives the best metrics (opens, clicks, replies, etc.)

Unfortunately, Gmail doesn’t provide a tool out of the box to send an A/B tests with their platform. But thanks to Google Sheets and a [Gmail mail merge](/mail-merge-gmail) solution, you can easily start an A/B tests using your Gmail account. Let’s see how to do it.

## Let’s prepare your AB test

To send your first A/B tests from a Gmail or Google Workspace (formerly G Suite), you need to start from... a Google Sheets. As I said in the introduction, Gmail doesn’t provide any marketing tools. But a myriad of third-party [mail merge tools](/best-google-apps/mail-merge-gmail), such as Mailmeteor, have filled the gap to power up your Gmail account.

Here are the steps to follow:

1. Open a [new Google Sheets](https://sheets.new) or copy our [demo spreadsheet](https://docs.google.com/spreadsheets/d/1XxGP-c8sburKspwrIEc_5j9vkAccHGAPC_N7jBIplPc/copy)
2. Add your mailing list in the column <kbd>A</kbd>. You can copy/paste (or import) your entire mailing list or just a subset of it. The A/B test will run on all the recipients that you’ve put into the spreadsheet

   [![Demo spreadsheet in Google Sheets to send an AB test](/assets/img/blog/how-to-ab-test/ab-test-demo-spreadsheet.png){:width="600px" height="360px"}](https://docs.google.com/spreadsheets/d/1XxGP-c8sburKspwrIEc_5j9vkAccHGAPC_N7jBIplPc/edit){:target="\_blank"}

3. Create a new column entitled "Group (A/B)"
4. Now split your recipients list in two groups. One half will be part of the group A and the other part will be the group B. To do so, just add A or B in the relevant cells.

   ![Splitting a mailing list in two groups (group A vs. group B)](/assets/img/blog/how-to-ab-test/ab-test-split.gif){:width="600px" height="320px"}

Your spreadsheet is almost ready! That was quick ;)

## What do you want to A/B test?

Now, it totally depends on the A/B test you want to perform. Sometimes you might want to try out a different subject, sometimes tweak a sentence, sometimes a whole paragraph or the entire email.

To have a great A/B test, I recommend you to restrict your test to the minimum. A/B tests are more effective if you change a (very) small part of your email. For example the subject or a sentence. If you A/B test more than that, it generally means that your test is too large and you won’t learn much from it.

<div class="blogpost-note"><strong>Pro tip:</strong> Some ninja marketers run A/B tests with only one (1) word of difference between the two emails sent. It requires a sample that is large enough and enough time to test.</div>

For this tutorial, let’s see [how to run an A/B test on the subject line](#how-to-ab-test-the-emails-subject). Then we will see [how to run an A/B test on a sentence](#how-to-ab-test-your-emails-body).

## How to A/B test the email’s subject?

Testing the email’s subject is probably the most common A/B tests in email marketing. The email’s subject is the first part of your email that recipients will interact with. And you get only one chance to make a first good impression.

To fine tune the subject of your emails, follow these steps:

1. Open your mailing list in Google Sheets and make sure that recipients are divided into two groups ([see above](#lets-prepare-your-spreadsheet)).
2. Create a new column in your spreadsheet and enter "subject" in the first cell of that column.

   ![Adding a new column "subject" in a Google Sheets](/assets/img/blog/how-to-ab-test/gsheets-new-column-subject.gif){:width="600px" height="257px"}

3. Now, in the second cell of that column, copy/paste the following formulae:<br/><kbd>=IF(B2="A";"My e-mail subject";"My other email subject")</kbd>

   ![New formulae in Google Sheets to send AB test the subject line](/assets/img/blog/how-to-ab-test/gsheets-new-formulae-subject.gif){:width="600px" height="326px"}

   What this formulae does is simply checking if the recipient from the row #2 is in the group A, by checking the content of the cell B2. If so, the subject will be "My e-mail subject". If the recipient is not part of group A, the subject will be "My other e-mail subject".

   You'll have to update this formulae with your own subjects. Also, make sure that the first part of the formulae, the condition <kbd>=IF(B2=</kbd>, is correct. For example if in your spreadsheet you’ve used the column <kbd>C</kbd> to split your recipients in two groups, you’ll have to update the formulae as follows <kbd>=IF(C2=</kbd>

4. Update the formulae with your own subjects to A/B test, then, replicate the formulae all across the mailing list (as shown in the GIF above).
5. Now, open Mailmeteor by going to the "Add-ons" menu, then "Mailmeteor" > "Open Mailmeteor". If you don’t have it yet, click here to install it.

   ![Open Mailmeteor from the "Add-ons" menu in Google Sheets](/assets/img/blog/how-to-ab-test/mailmeteor-addons-open.png){:width="600px" height="383px"}

6. In Mailmeteor, create a new template and in the subject’s field, enter the following {{ subject }}. This tells Mailmeteor that the subject is a variable and that it should use, for each recipient, the content of the column entitled "subject".

   ![Entering the subject line in Mailmeteor email editor](/assets/img/blog/how-to-ab-test/mailmeteor-template-subject-line.gif){:width="600px" height="408px"}

7. Once your template is ready, click on "Save", then preview it. Whenever you are ready hit send!

Using this simple technique you can try out different subjects and see which one performs the better. If you have a Mailmeteor Premium account, and you have enable the tracking, Mailmeteor will show you which group has the best open-rate and click-rate. Making it really easy to decide which subject you should use.

## How to A/B test your email’s body?

Like I said earlier, it’s a best practice to A/B test only a small part of your e-mail. In the following, we will run a test by changing one sentence of a paragraph.

While you can apply the same principles exposed here to change multiple sentences or even send totally different emails to each of your recipient, it’s best to test very small changes. Otherwise you won’t know precisely what makes one version better than the other.

To fine tune a part of your email’s body, follow these steps:

1. Open your mailing list in Google Sheets and make sure that recipients are divided into two groups ([see above](#lets-prepare-your-spreadsheet)).
2. Create a new column in your spreadsheet and enter the word "alternative" in the first cell of that column.

   ![Adding a new column "alternative" in a Google Sheets](/assets/img/blog/how-to-ab-test/gsheets-new-column-alternative.gif){:width="600px" height="230px"}

3. Now, in the second cell of that column, enter the following formulae:<br/><kbd>=IF(B2="A";"Word/sentence for the group A";"Other word/sentence for the group B")</kbd>

   What this formulae does is simply checking if the recipient from the row #2 is in the group A, by checking the content of the cell B2. If so, the email’s body will use "Word/sentence for the group A". If the recipient is not part of group A, the subject will be "Other word/sentence for the group B".

   You'll have to update this formulae with the word/sentence that you want to AB test. Also, make sure that the first part of the formulae, the condition <kbd>=IF(B2=</kbd>, is correct. For example if, in your spreadsheet, you’ve used the column <kbd>C</kbd> to split your recipients in two groups, you’ll have to update the formulae as follows <kbd>=IF(C2=</kbd>

4. Once you’ve updated the formulae, replicate it all across the column.

   ![Replicating a formulae in Google Sheets](/assets/img/blog/how-to-ab-test/gsheets-replicate-formulae.gif){:width="600px" height="230px"}

5. Then, open Mailmeteor by going to the "Add-ons" menu, then "Mailmeteor" > "Open Mailmeteor". If you don’t have it yet, click here to install it.

   ![Open Mailmeteor from the "Add-ons" menu in Google Sheets](/assets/img/blog/how-to-ab-test/mailmeteor-addons-open.png){:width="600px" height="383px"}

6. In Mailmeteor, create a new template and in the email’s body, enter the merge field {{ alternative }} where you want to test the two alternatives. This tells Mailmeteor that you are using variables and that it should use, for each recipient, the content of the column entitled "alternative".

   ![Writing an A/B test in Mailmeteor](/assets/img/blog/how-to-ab-test/mailmeteor-template-alternative.png){:width="600px" height="400px"}

7. Once your template is ready, preview it, then hit send!

Of course, you combine multiples merge fields (aka variables) in the same email. For example, you could use the recipient’s first name (if you have it). You could also use the same technique to run an A/B test on multiple parts of your email. But that’s not something I would recommend as it’s a best practice to narrow your test to the minimum as I‘ve explained earlier.

## Test your AB significance

When your AB test is completed, it's now time to validate your results by calcultating its significance. The significance will let you know if the copy change impacted your results positively and by how much.

[![Calculating AB test significance](/assets/img/blog/how-to-ab-test/ab-test-significance.png){:width="600px" height="400px"}](https://neilpatel.com/ab-testing-calculator/){:rel="nofollow noopener"}

In this example, we sent 2000 emails in total, split into 2 groups of 1000 recipients.

In the first group A, 90 recipients engaged with our email by clicking one of its link, that's a 9% conversion rate. In the second group B, there were 120 clicks, that's a 12% conversion rate.

Now it's not enough to say that 12% is better than 9%. It actually depends on your AB test group sizes. Calculating the significance tells us that indeed the test B converted 34% better, which is statistically significant. In others words, you should definitely go for the test B copy!

There are various AB test calculators out there. We can recommend the free and open source [AB test significance calculator](https://mattmazur.com/2015/02/27/introducing-abtestcalculator-com-an-open-source-ab-test-significance-calculator/){:rel="nofollow noopener"} made my Matt Mazur or the simpler [AB test calculator](https://neilpatel.com/ab-testing-calculator/){:rel="nofollow noopener"} from Neil Patel.

## Let’s wrap it up

In this tutorial, you have learned how to A/B test your emailing campaign using your Gmail account. You’ve seen that it’s really easy to do so, using both Google Sheets and a mail merge solution such as Mailmeteor.

Two more words on Mailmeteor: You can send up to 75 emails per day, using the free version of Mailmeteor, which lets you run an A/B test on two groups of ~40 people in each. Plenty enough for a simple test.

If you need to run your test on more recipients, [grab a premium account](/pricing) to send up to 2000 emails/day (one test per day with two groups of 1000 recipients each). Mailmeteor Premium also comes with tracking feature to easily compute metrics from your campaigns, such as the open rate or click rate of each group.

And you’re not limited to test email with plain text. Mailmeteor supports HTML email, which make it the tool of choice for all email marketers.

<div class="blogpost-endnote">
  <p>This guide was written by Corentin Brossault, <a href="https://mailmeteor.com">Mailmeteor</a>'s co-founder. Mailmeteor is a simple & privacy-focused emailing software. Trusted by millions of users worldwide, it is often considered as the best Gmail mail merge to send mass personalized emails. Give us a try and let us know what you think!</p>

  <p>➤ <a href="https://mailmeteor.com" class="font-weight-bold">Start sending emails with Mailmeteor</a></p>
</div>

<script></script>
