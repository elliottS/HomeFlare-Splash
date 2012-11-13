class ContactMailer < ActionMailer::Base
	default from: 'info@homeflareapp.com'

	def new_contact(contact)
		@contact = contact

		mail(to: "tony@realtypromobile.com",
         subject: "New Contact: #{contact[:first_name]} #{contact[:last_name]}")
	end
end