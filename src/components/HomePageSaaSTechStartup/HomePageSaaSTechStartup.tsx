import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AvatarImageIcon } from './AvatarImageIcon.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import classes from './HomePageSaaSTechStartup.module.css';
import { IconChevronRightIcon2 } from './IconChevronRightIcon2.js';
import { IconChevronRightIcon3 } from './IconChevronRightIcon3.js';
import { IconChevronRightIcon4 } from './IconChevronRightIcon4.js';
import { IconChevronRightIcon5 } from './IconChevronRightIcon5.js';
import { IconChevronRightIcon6 } from './IconChevronRightIcon6.js';
import { IconChevronRightIcon } from './IconChevronRightIcon.js';
import { IconRelumeIcon2 } from './IconRelumeIcon2.js';
import { IconRelumeIcon3 } from './IconRelumeIcon3.js';
import { IconRelumeIcon } from './IconRelumeIcon.js';
import { ListItemIcon2 } from './ListItemIcon2.js';
import { ListItemIcon3 } from './ListItemIcon3.js';
import { ListItemIcon } from './ListItemIcon.js';
import { LogoIcon2 } from './LogoIcon2.js';
import { LogoIcon } from './LogoIcon.js';
import { RelumeBlackIcon2 } from './RelumeBlackIcon2.js';
import { RelumeBlackIcon3 } from './RelumeBlackIcon3.js';
import { RelumeBlackIcon } from './RelumeBlackIcon.js';
import { TitleIcon2 } from './TitleIcon2.js';
import { TitleIcon3 } from './TitleIcon3.js';
import { TitleIcon4 } from './TitleIcon4.js';
import { TitleIcon5 } from './TitleIcon5.js';
import { TitleIcon } from './TitleIcon.js';
import { WebflowBlackIcon2 } from './WebflowBlackIcon2.js';
import { WebflowBlackIcon3 } from './WebflowBlackIcon3.js';
import { WebflowBlackIcon4 } from './WebflowBlackIcon4.js';
import { WebflowBlackIcon } from './WebflowBlackIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 26:151 */
export const HomePageSaaSTechStartup: FC<Props> = memo(function HomePageSaaSTechStartup(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.navbar2}>
        <div className={classes.container}>
          <div className={classes.column}>
            <div className={classes.logo}>
              
              <p>Mindspace</p>
            </div>
          </div>
          <div className={classes.column2}>
            <div className={classes.column3}>
              <div className={classes.signIn}>Sign in</div>
              <div className={classes.getStarted}>Get started</div>
              <div className={classes.explore}>Explore</div>
              <div className={classes.navLinkDropdown}>
                <div className={classes.about}>About</div>
                <div className={classes.chevronDown}>
                  <ChevronDownIcon className={classes.icon2} />
                </div>
              </div>
            </div>
            <div className={classes.column4}>
              <button className={classes.button}>
                <div className={classes.logIn}>Log in</div>
              </button>
              <button className={classes.button2}>
                <div className={classes.signUp}>Sign up</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header1}>
        <div className={classes.content}>
          <div className={classes.sectionTitle}>
            <div className={classes.findYourInnerCalmToday}>Find Your Inner Calm Today</div>
            <div className={classes.mindspaceSGuidedMeditationsCan}>
              Mindspace&#39;s guided meditations can help you reduce stress, improve focus, and achieve inner calm in
              just a few minutes a day.
            </div>
          </div>
          <div className={classes.actions}>
            <button className={classes.button3}>
              <div className={classes.getStarted2}>Get started</div>
            </button>
            <button className={classes.button4}>
              <div className={classes.learnMore}>Learn more</div>
            </button>
          </div>
        </div>
        <div className={classes.placeholderImage}>
</div>
      </div>
      <div className={classes.logo1}>
        <div className={classes.trustedByFortune500Companies}>Trusted by Fortune 500 Companies</div>
        <div className={classes.content2}>
          <div className={classes.row}>
            <div className={classes.webflowBlack}>
              <WebflowBlackIcon className={classes.icon3} />
            </div>
            <div className={classes.relumeBlack}>
              <RelumeBlackIcon className={classes.icon4} />
            </div>
            <div className={classes.webflowBlack2}>
              <WebflowBlackIcon2 className={classes.icon5} />
            </div>
            <div className={classes.relumeBlack2}>
              <RelumeBlackIcon2 className={classes.icon6} />
            </div>
            <div className={classes.webflowBlack3}>
              <WebflowBlackIcon3 className={classes.icon7} />
            </div>
            <div className={classes.relumeBlack3}>
              <RelumeBlackIcon3 className={classes.icon8} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.layout238}>
        <div className={classes.howItWorks}>How it works</div>
        <div className={classes.row2}>
          <div className={classes.column5}>
            <div className={classes.iconRelume}>
              <IconRelumeIcon className={classes.icon9} />
            </div>
            <div className={classes.content3}>
              <div className={classes.chooseYourSession}>Choose Your Session</div>
              <div className={classes.browseOurLibraryOf510And20Minu}>
                Browse our library of 5, 10, and 20-minute guided meditations led by mindfulness experts to find the
                perfect session for your needs.
              </div>
            </div>
          </div>
          <div className={classes.column6}>
            <div className={classes.iconRelume2}>
              <IconRelumeIcon2 className={classes.icon10} />
            </div>
            <div className={classes.content4}>
              <div className={classes.relaxYourMind}>Relax Your Mind</div>
              <div className={classes.ourSoothingBackgroundMusicAndN}>
                Our soothing background music and nature sounds create a calming atmosphere for your meditation
                practice.
              </div>
            </div>
          </div>
          <div className={classes.column7}>
            <div className={classes.iconRelume3}>
              <IconRelumeIcon3 className={classes.icon11} />
            </div>
            <div className={classes.content5}>
              <div className={classes.stayMindfulOnTheGo}>Stay Mindful on the Go</div>
              <div className={classes.withYogaStretchingAndWalkingMe}>
                With yoga, stretching, and walking meditations, you can practice mindfulness anytime, anywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.layout141}>
        <div className={classes.content6}>
          <div className={classes.sectionTitle2}>
            <div className={classes.sleepBetterTonight}>Sleep Better Tonight</div>
            <div className={classes.content7}>
              <div className={classes.unwindWithGuidedSleepMeditatio}>Unwind with Guided Sleep Meditations</div>
              <div className={classes.ourSleepStoriesAndMeditationsC}>
                Our sleep stories and meditations can help you end each day mindfully and improve your quality of sleep.
              </div>
            </div>
          </div>
          <div className={classes.actions2}>
            <button className={classes.button5}>
              <div className={classes.learnMore2}>Learn more</div>
            </button>
          </div>
        </div>
        <div className={classes.placeholderImage2}></div>
      </div>
      <div className={classes.layout225}>
        <div className={classes.placeholderImage3}></div>
        <div className={classes.list}>
          <div className={classes.listItem}>
            <div className={classes.icon12}>
              <ListItemIcon className={classes.icon13} />
            </div>
            <div className={classes.content8}>
              <div className={classes.findInnerCalm}>Find inner calm</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte}>Achieve inner peace with guided meditations.</div>
              <div className={classes.frame113}>
                <div className={classes.button6}>
                  <div className={classes.learnMore3}>Learn more</div>
                  <div className={classes.iconChevronRight}>
                    <IconChevronRightIcon className={classes.icon14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.listItem2}>
            <div className={classes.icon15}>
              <ListItemIcon2 className={classes.icon16} />
            </div>
            <div className={classes.content9}>
              <div className={classes.reduceStressLevels}>Reduce stress levels</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                Experience less anxiety with our mindfulness sessions.
              </div>
              <div className={classes.frame1132}>
                <div className={classes.button7}>
                  <div className={classes.learnMore4}>Learn more</div>
                  <div className={classes.iconChevronRight2}>
                    <IconChevronRightIcon2 className={classes.icon17} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.listItem3}>
            <div className={classes.icon18}>
              <ListItemIcon3 className={classes.icon19} />
            </div>
            <div className={classes.content10}>
              <div className={classes.improveFocusAndProductivity}>Improve focus and productivity</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                Boost your productivity with our science-backed sessions.
              </div>
              <div className={classes.frame1133}>
                <div className={classes.button8}>
                  <div className={classes.learnMore5}>Learn more</div>
                  <div className={classes.iconChevronRight3}>
                    <IconChevronRightIcon3 className={classes.icon20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.layout25}>
        <div className={classes.content11}>
          <div className={classes.sectionTitle3}>
            <div className={classes.customerStories}>Customer Stories</div>
            <div className={classes.content12}>
              <div className={classes.realCustomerResults}>Real customer results</div>
              <div className={classes.saveTimeWith10xFasterProgress}>Save time with 10x faster progress.</div>
            </div>
          </div>
          <div className={classes.list2}>
            <div className={classes.row3}>
              <div className={classes.listItem4}>
                <div className={classes._10x}>10x</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte4}>Increased productivity by 300%</div>
              </div>
              <div className={classes.listItem5}>
                <div className={classes._300}>300%</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte5}>High return on investment</div>
              </div>
            </div>
            <div className={classes.row4}>
              <div className={classes.listItem6}>
                <div className={classes._5k}>5k+</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte6}>Satisfied customers</div>
              </div>
              <div className={classes.listItem7}>
                <div className={classes._100}>100+</div>
                <div className={classes.loremIpsumDolorSitAmetConsecte7}>5-star reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.placeholderImage4}></div>
      </div>
      <div className={classes.testimonial1}>
        <div className={classes.content13}>
          <div className={classes.webflowBlack4}>
            <WebflowBlackIcon4 className={classes.icon21} />
          </div>
          <div className={classes.MindspaceHasHelpedMeFindInnerC}>
            &quot;Mindspace has helped me find inner calm and reduce my stress levels. The guided meditations are easy
            to follow and the results are amazing.&quot;
          </div>
          <div className={classes.avatar}>
            <div className={classes.avatarImage}>
              <AvatarImageIcon className={classes.icon22} />
            </div>
            <div className={classes.avatarContent}>
              <div className={classes.jennaSmith}>Jenna Smith</div>
              <div className={classes.marketingManagerABCCompany}>Marketing Manager, ABC Company</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header23}>
        <div className={classes.column8}>
          <div className={classes.content14}>
            <div className={classes.discoverThePowerOfMindfulnessW}>
              Discover the power of mindfulness with Mindspace&#39;s guided meditations.
            </div>
            <div className={classes.mindspaceHelpsYouFindCalmAndFo}>
              Mindspace helps you find calm and focus in just a few minutes a day.
            </div>
          </div>
          <div className={classes.actions3}>
            <button className={classes.button9}>
              <div className={classes.getStarted3}>Get started</div>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.fAQ1}>
        <div className={classes.container2}>
          <div className={classes.sectionTitle4}>
            <div className={classes.frequentlyAskedQuestions}>Frequently asked questions</div>
            <div className={classes.findAnswersToPopularQuestionsA}>
              Find answers to popular questions about mindfulness and meditation.
            </div>
          </div>
          <div className={classes.accordion}>
            <div className={classes.accordionItem}>
              <div className={classes.divider}></div>
              <div className={classes.title}>
                <div className={classes.whatIsMindfulness}>What is mindfulness?</div>
                <div className={classes.icon23}>
                  <TitleIcon className={classes.icon24} />
                </div>
              </div>
            </div>
            <div className={classes.accordionItem2}>
              <div className={classes.divider2}></div>
              <div className={classes.title2}>
                <div className={classes.howCanMeditationHelpMe}>How can meditation help me?</div>
                <div className={classes.icon25}>
                  <TitleIcon2 className={classes.icon26} />
                </div>
              </div>
            </div>
            <div className={classes.accordionItem3}>
              <div className={classes.divider3}></div>
              <div className={classes.title3}>
                <div className={classes.whatAreTheBenefits}>What are the benefits?</div>
                <div className={classes.icon27}>
                  <TitleIcon3 className={classes.icon28} />
                </div>
              </div>
            </div>
            <div className={classes.accordionItem4}>
              <div className={classes.divider4}></div>
              <div className={classes.title4}>
                <div className={classes.howDoIGetStarted}>How do I get started?</div>
                <div className={classes.icon29}>
                  <TitleIcon4 className={classes.icon30} />
                </div>
              </div>
            </div>
            <div className={classes.accordionItem5}>
              <div className={classes.divider5}></div>
              <div className={classes.title5}>
                <div className={classes.isThereACostForTheApp}>Is there a cost for the app?</div>
                <div className={classes.icon31}>
                  <TitleIcon5 className={classes.icon32} />
                </div>
              </div>
            </div>
            <div className={classes.divider6}></div>
          </div>
          <div className={classes.content15}>
            <div className={classes.content16}>
              <div className={classes.stillHaveQuestions}>Still have questions?</div>
              <div className={classes.contactOurSupportTeamForAnyAdd}>
                Contact our support team for any additional assistance.
              </div>
            </div>
            <button className={classes.button10}>
              <div className={classes.contactUs}>Contact us</div>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.blog34}>
        <div className={classes.sectionTitle5}>
          <div className={classes.blog}>Blog</div>
          <div className={classes.content17}>
            <div className={classes.mindspaceYourGuideToMindfulnes}>
              Mindspace - Your Guide to Mindfulness and Inner Calm
            </div>
            <div className={classes.discoverThePowerOfMindfulnessW2}>
              Discover the power of mindfulness with our guided meditations and resources.
            </div>
          </div>
        </div>
        <div className={classes.content18}>
          <div className={classes.row5}>
            <div className={classes.card}>
              <div className={classes.placeholderImage5}></div>
              <div className={classes.content19}>
                <div className={classes.info}>
                  <div className={classes.frame61}>
                    <div className={classes.category}>Category</div>
                  </div>
                  <div className={classes._5MinRead}>5 min read</div>
                </div>
                <div className={classes.title6}>
                  <div className={classes.mindfulnessMeditationForStress}>Mindfulness Meditation for Stress Relief</div>
                  <div className={classes.simpleStepsToReduceStressAndFi}>
                    Simple steps to reduce stress and find inner peace with mindfulness meditation.
                  </div>
                </div>
              </div>
              <div className={classes.button11}>
                <div className={classes.readMore}>Read more</div>
                <div className={classes.iconChevronRight4}>
                  <IconChevronRightIcon4 className={classes.icon33} />
                </div>
              </div>
            </div>
            <div className={classes.card2}>
              <div className={classes.placeholderImage6}></div>
              <div className={classes.content20}>
                <div className={classes.info2}>
                  <div className={classes.frame612}>
                    <div className={classes.category2}>Category</div>
                  </div>
                  <div className={classes._5MinRead2}>5 min read</div>
                </div>
                <div className={classes.title7}>
                  <div className={classes.theScienceBehindMindfulnessMed}>
                    The Science Behind Mindfulness Meditation
                  </div>
                  <div className={classes.learnAboutTheResearchBackedBen}>
                    Learn about the research-backed benefits of mindfulness and how it can improve your life.
                  </div>
                </div>
              </div>
              <div className={classes.button12}>
                <div className={classes.readMore2}>Read more</div>
                <div className={classes.iconChevronRight5}>
                  <IconChevronRightIcon5 className={classes.icon34} />
                </div>
              </div>
            </div>
            <div className={classes.card3}>
              <div className={classes.placeholderImage7}></div>
              <div className={classes.content21}>
                <div className={classes.info3}>
                  <div className={classes.frame613}>
                    <div className={classes.category3}>Category</div>
                  </div>
                  <div className={classes._5MinRead3}>5 min read</div>
                </div>
                <div className={classes.title8}>
                  <div className={classes.mindfulLivingBringingMindfulne}>
                    Mindful Living: Bringing Mindfulness into Daily Activities
                  </div>
                  <div className={classes.incorporateMindfulnessIntoYour}>
                    Incorporate mindfulness into your daily routine with these easy tips and activities.
                  </div>
                </div>
              </div>
              <div className={classes.button13}>
                <div className={classes.readMore3}>Read more</div>
                <div className={classes.iconChevronRight6}>
                  <IconChevronRightIcon6 className={classes.icon35} />
                </div>
              </div>
            </div>
          </div>
          <button className={classes.button14}>
            <div className={classes.viewAll}>View all</div>
          </button>
        </div>
      </div>
      <div className={classes.footer6}>
        <div className={classes.container3}>
          <div className={classes.newsletter}>
            <div className={classes.content22}>
              <div className={classes.joinOurNewsletter}>Join our newsletter</div>
              <div className={classes.stayUpdatedWithTheLatestMindfu}>
                Stay updated with the latest mindfulness tips and resources.
              </div>
            </div>
            <div className={classes.actions4}>
              <div className={classes.form}>
                <div className={classes.textInput}>
                  <div className={classes.enterYourEmail}>Enter your email</div>
                </div>
                <button className={classes.button15}>
                  <div className={classes.subscribe}>Subscribe</div>
                </button>
              </div>
              <div className={classes.bySubscribingYouAgreeToOurPriv}>
                By subscribing you agree to our Privacy Policy.
              </div>
            </div>
          </div>
          <div className={classes.divider7}></div>
          <div className={classes.links}>
            <div className={classes.column9}>
              <div className={classes.mindfulLiving}>Mindful Living</div>
              <div className={classes.footerLinks}>
                <div className={classes.link}>
                  <div className={classes.guidedMeditations}>Guided Meditations</div>
                </div>
                <div className={classes.link2}>
                  <div className={classes.breathworkExercises}>Breathwork Exercises</div>
                </div>
                <div className={classes.link3}>
                  <div className={classes.mindfulMovement}>Mindful Movement</div>
                </div>
                <div className={classes.link4}>
                  <div className={classes.sleepStories}>Sleep Stories</div>
                </div>
                <div className={classes.link5}>
                  <div className={classes.mindfulnessArticles}>Mindfulness Articles</div>
                </div>
              </div>
            </div>
            <div className={classes.column10}>
              <div className={classes.learnMore6}>Learn More</div>
              <div className={classes.footerLinks2}>
                <div className={classes.link6}>
                  <div className={classes.aboutUs}>About Us</div>
                </div>
                <div className={classes.link7}>
                  <div className={classes.ourTeam}>Our Team</div>
                </div>
                <div className={classes.link8}>
                  <div className={classes.ourMission}>Our Mission</div>
                </div>
                <div className={classes.link9}>
                  <div className={classes.testimonials}>Testimonials</div>
                </div>
                <div className={classes.link10}>
                  <div className={classes.fAQs}>FAQs</div>
                </div>
              </div>
            </div>
            <div className={classes.column11}>
              <div className={classes.connectWithUs}>Connect With Us</div>
              <div className={classes.footerLinks3}>
                <div className={classes.link11}>
                  <div className={classes.contactUs2}>Contact Us</div>
                </div>
                <div className={classes.link12}>
                  <div className={classes.partnerships}>Partnerships</div>
                </div>
                <div className={classes.link13}>
                  <div className={classes.joinOurCommunity}>Join Our Community</div>
                </div>
                <div className={classes.link14}>
                  <div className={classes.termsConditions}>Terms &amp; Conditions</div>
                </div>
                <div className={classes.link15}>
                  <div className={classes.privacyPolicy}>Privacy Policy</div>
                </div>
              </div>
            </div>
            <div className={classes.column12}>
              <div className={classes.followUs}>Follow Us</div>
              <div className={classes.footerLinks4}>
                <div className={classes.link16}>
                  <div className={classes.instagram}>Instagram</div>
                </div>
                <div className={classes.link17}>
                  <div className={classes.twitter}>Twitter</div>
                </div>
                <div className={classes.link18}>
                  <div className={classes.facebook}>Facebook</div>
                </div>
                <div className={classes.link19}>
                  <div className={classes.pinterest}>Pinterest</div>
                </div>
                <div className={classes.link20}>
                  <div className={classes.linkedIn}>LinkedIn</div>
                </div>
              </div>
            </div>
            <div className={classes.column13}>
              <div className={classes.columnFive}>Column Five</div>
              <div className={classes.footerLinks5}>
                <div className={classes.link21}>
                  <div className={classes.linkTwentyOne}>Link Twenty One</div>
                </div>
                <div className={classes.link22}>
                  <div className={classes.linkTwentyTwo}>Link Twenty Two</div>
                </div>
                <div className={classes.link23}>
                  <div className={classes.linkTwentyThree}>Link Twenty Three</div>
                </div>
                <div className={classes.link24}>
                  <div className={classes.linkTwentyFour}>Link Twenty Four</div>
                </div>
                <div className={classes.link25}>
                  <div className={classes.linkTwentyFive}>Link Twenty Five</div>
                </div>
              </div>
            </div>
            <div className={classes.column14}>
              <div className={classes.columnSix}>Column Six</div>
              <div className={classes.footerLinks6}>
                <div className={classes.link26}>
                  <div className={classes.linkTwentySix}>Link Twenty Six</div>
                </div>
                <div className={classes.link27}>
                  <div className={classes.linkTwentySeven}>Link Twenty Seven</div>
                </div>
                <div className={classes.link28}>
                  <div className={classes.linkTwentyEight}>Link Twenty Eight</div>
                </div>
                <div className={classes.link29}>
                  <div className={classes.linkTwentyNine}>Link Twenty Nine</div>
                </div>
                <div className={classes.link30}>
                  <div className={classes.linkThirty}>Link Thirty</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.credits}>
            <div className={classes.divider8}></div>
            <div className={classes.row6}>
              <div className={classes.logo2}>
                <LogoIcon2 className={classes.icon36} />
              </div>
              <div className={classes.credits2}>
                <div className={classes._2023RelumeAllRightsReserved}>© 2023 Relume. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
