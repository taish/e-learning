require 'active_support/core_ext/string/strip'
class EducationalController < ApplicationController
  def ruby_basic
    @code = <<-'EOS'.strip_heredoc
    # "Hello world"をputsしてください


    # 4 × 5の計算結果をputsしてください


    # "9 * 5"を文字列としてputsしてください
    EOS
  end

  def ruby_basic_answer
    @code = <<-'EOS'.strip_heredoc
    # "Hello world"をputsしてください
    puts "Hello world"


    # 4 × 5の計算結果をputsしてください
    puts 4 * 5


    # "9 * 5"を文字列としてputsしてください
    puts "9 * 5"
    EOS
  end
end
