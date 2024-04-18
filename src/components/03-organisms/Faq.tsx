import { Accordion, AccordionProps } from "../01-atoms/Accordion";

export const Faq = () => {
	const AccordionData: AccordionProps[] = [
		{
			title: "What is Web3Task?",
			answer:
				"Web3Task is an innovative platform that solves the challenge of monetizing contributions by fragmenting tasks in a way inspired by the GitHub problem model.  Our focus is to reduce the barriers to entry that students face in the job market by providing opportunities to gain real work experience.",
		},
		{
			title: "How does it work?",
			answer:
				"We connect workers to projects, eliminating high partner fees and the lack of skills assessment. Our protocol empowers users through active participation in real projects, allowing recruiters to find professionals with certified experience. We provide tools like scoring to measure results by tokenizing work, social profiles, and portfolios. A network to facilitate connections between users and projects, to create a transparent and trustworthy Web 3.0 environment.",
		},
		{
			title: "What are the benefits of joining Web3Task as a student?",
			answer:
				"You will have the opportunity to gain hands-on experience working on real projects, allowing you to build a robust and verifiable portfolio in the chain, as well as expanding your professional network and the opportunity to be hired by Kyodo.",
		},
		{
			title: "Who can complete a task?",
			answer:
				"Anyone who can deliver what is asked for can participate. However, our platform is mainly focused on students and offers them advantages over freelancers due to our bidding system, thus prioritizing the inclusion and professional growth of students. The recruiter can choose from the list of interested parties - after analyzing their social profiles, GitHub, LinkedIn - who is best suited to perform the task.",
		},
		{
			title: "Who can create a task?",
			answer:
				"Only platform administrators can create tasks for their interests, while recruiters, who are KYC-authenticated entities, can create tasks.",
		},
		{
			title: "Is there a ranking of users?",
			answer:
				"We have implemented a gamification system for recruiters and contributors. Through our Access Control V2 technology, users increase their score by delivering or creating tasks efficiently and on time. This score is used to rank users on the platform, which increases reliability. However, in case of problems, it is possible to open a dispute.",
		},
		{
			title: "How do the disputes work?",
			answer:
				"Instead of a traditional dispute system, we have chosen a gamified approach. Initiating a dispute is considered risky for both parties, as a dispute drastically lowers the DAO&nbsp;s score for the party whose decision was unfavorable. This policy encourages collaborative problem-solving, which avoids unnecessary disputes and serious harm to those who are wrong. This is why it is so important to describe the desired task correctly and also to perform the chosen task with finesse.",
		},
		{
			title:
				"What are the benefits of participating in Web3Task as a recruiter?",
			answer:
				"You will be able to find people who can meet your needs, often at a lower cost than expanding your internal team or finding a freelancer.",
		},
		{
			title: "What types of tasks are available on the platform?",
			answer:
				"You&sbnpll find a wide range of development tasks available. From programming tasks to design, planning, and other areas of development.",
		},
	];

	return (
		<div className="flex w-full flex-col items-center">
			<div className="flex  flex-col items-center justify-center gap-16">
				<div className="flex w-full flex-col justify-center text-center md:w-[491px] ">
					<div>
						<span className="font-['Inter'] text-[32px] font-bold leading-[64px] text-white md:text-[64px]">
							Your questions,
						</span>
					</div>
					<div>
						<span className="bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[32px] font-bold leading-[64px] text-transparent md:text-[64px]">
							&nbsp;answered!
						</span>
					</div>
				</div>
				<div className="h-full w-full rounded-3xl border  border-[#B7B4BB] border-opacity-25 px-[50px] pb-[50px] pt-[30px] md:w-[590px]">
					{AccordionData.map((item, index) => (
						<div key={index}>
							<Accordion title={item.title} answer={item.answer} />
							{AccordionData.length - 1 === index ? null : (
								<div className="border-b border-[#B7B4BB] border-opacity-25 "></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
