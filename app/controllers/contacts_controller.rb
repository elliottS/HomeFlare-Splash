class ContactsController < ApplicationController
	def create
		ContactMailer.new_contact(params.slice(:first_name, :last_name, :email, :phone, :message)).deliver 
	end
end