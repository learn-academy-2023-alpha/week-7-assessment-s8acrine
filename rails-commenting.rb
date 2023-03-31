# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Defines the class BlogPostController, which inherits from the ApplicationController superclass
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # instantiates the instance variable posts, which is set equal to BlogPost.all (ActiveRecord pull for all instances of the BlogPost model)
    # used in the index route to show all blog posts
    @posts = BlogPost.all
  end

  # ---3)
  # instantiates the instance variable post, which is set to the BlogPost which has an id mathching the id passed in the params
  # used to in the show route to show a single blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # instantiates teh instance variable post, which is set to the BlogPost.new value.
  # using with routing to route to a form which creates a new blogpost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # instantiates teh instance variable post, which is set to the creation of a new instance of BlogPost with blog_post_params
    # Creates a new instance of a blog post using the parameters entered from the parameters. 
    # if the creation of the blog post is valid, redirects to the show route of the created post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # gets the form to edit a blog post determined by the id in the paramaters
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # uses the update method to update the values of a blog post using the parameters provided
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # redirects to the path blog_posts from the routes file. This is likely the index page, which shows all blog posts
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # creates a set of methods that can ONLY be called on internally from this file. Prevents the calling of this method from anywhere other than directly in this file
  private
  def blog_post_params
    # ---10)
    # sets the required MODEL to be edited, as well as the permitted values that can be edited
    params.require(:blog_post).permit(:title, :content)
  end
end
