import { emailService } from '@/services/email.service'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Dog,
	Cat,
	PawPrint,
	SendIcon,
	LoaderIcon,
	CheckCircle2,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().min(5, 'Subject must be at least 5 characters'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof formSchema>

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)
		emailService.sendEmail(data, {
			successCallback: () => {
				setIsSubmitting(false)
				setSubmitSuccess(true)
				reset()
			},
			errorCallback: () => {
				setIsSubmitting(false)
				alert('Oops! Something went wrong. Please try again later')
			},
		})
	}

	return (
		<div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 animate-fade-in-up">
			<div className="flex justify-center mb-6 gap-4 text-gray-600 animate-bounce-slow">
				<PawPrint className="w-8 h-8 text-pink-500" />
				<Dog className="w-8 h-8 text-blue-500" />
				<Cat className="w-8 h-8 text-purple-500" />
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				{submitSuccess && (
					<div className="flex items-center gap-3 bg-green-100 p-4 rounded-xl border border-green-300">
						<CheckCircle2 className="text-green-600" />
						<p className="text-green-800 font-medium">
							Thanks! Your message was sent successfully.
						</p>
					</div>
				)}

				<div>
					<label className="block font-medium text-gray-800 mb-1" htmlFor="name">
						Your Name
					</label>
					<input
						{...register('name')}
						id="name"
						type="text"
						placeholder="Enter your name"
						className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
					)}
				</div>

				<div>
					<label className="block font-medium text-gray-800 mb-1" htmlFor="email">
						Email
					</label>
					<input
						{...register('email')}
						id="email"
						type="email"
						placeholder="you@example.com"
						className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
					)}
				</div>

				<div>
					<label className="block font-medium text-gray-800 mb-1" htmlFor="subject">
						Subject
					</label>
					<input
						{...register('subject')}
						id="subject"
						type="text"
						placeholder="What's the topic?"
						className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
					/>
					{errors.subject && (
						<p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
					)}
				</div>

				<div>
					<label className="block font-medium text-gray-800 mb-1" htmlFor="message">
						Message
					</label>
					<textarea
						{...register('message')}
						id="message"
						placeholder="Say hello or bark something..."
						rows={5}
						className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
					/>
					{errors.message && (
						<p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50"
				>
					{isSubmitting ? (
						<>
							<LoaderIcon className="w-5 h-5 animate-spin" />
							Sending...
						</>
					) : (
						<>
							<SendIcon className="w-5 h-5" />
							Send Message
						</>
					)}
				</button>
			</form>
		</div>
	)
}
