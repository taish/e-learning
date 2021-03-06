require 'active_support/core_ext/string/strip'
class EducationalController < ApplicationController
  layout false

  def last_test
    @code = <<-'EOS'.strip_heredoc
    # 1から10までの累乗をそれぞれfor文でputsしてください


    # クラス「Animal」を定義し、変数「dog」「cat」にインスタンスを格納してください


    # if文で「dog」「cat」が等しいかどうかを比較し、
    # 等しい場合は "dogとcatは同じ動物です"
    # 異なる場合は "dogとcatは違う動物です" とputsしてください
    EOS

    @answer = <<-'EOS'.strip_heredoc
    # 1から10までの累乗をそれぞれfor文でputsしてください
    for number in 1..10 do
      puts number * number
    end

    # クラス「Animal」を定義し、変数「dog」「cat」にインスタンスを格納してください
    class Animal
    end

    dog = Animal.new
    cat = Animal.new


    # if文で「dog」「cat」が等しいかどうかを比較し、
    # 等しい場合は "dogとcatは同じ動物です"
    # 異なる場合は "dogとcatは違う動物です" とputsしてください
    if dog == cat
      puts "dogとcatは同じ動物です"
    else
      puts "dogとcatは違う動物です"
    end
    EOS
  end

  def ruby_basic_input
  end

  def ruby_basic
    @code = <<-'EOS'.strip_heredoc
    # "Hello world"をputsしてください


    # 4 × 5の計算結果をputsしてください


    # "9 * 5"を文字列としてputsしてください
    EOS

    @answer = <<-'EOS'.strip_heredoc
    # "Hello world"をputsしてください
    puts "Hello world"


    # 4 × 5の計算結果をputsしてください
    puts 4 * 5


    # "9 * 5"を文字列としてputsしてください
    puts "9 * 5"
    EOS
  end

  # 3章.オブジェクト
  def object_input
  end

  def object
    @code = <<-'EOS'.strip_heredoc
    # 数値オブジェクト3.14を四捨五入してputsしてください


    # 文字列オブジェクト"Ruby"を反転させてputsしてください
    EOS

    @answer = <<-'EOS'.strip_heredoc
    # 数値オブジェクト3.14を四捨五入してputsしてください
    puts 3.14.round


    # 文字列オブジェクト"Ruby"を反転させてputsしてください
    puts "Ruby".reverse
    EOS
  end

  # 5章.クラス
  def method_input
  end

  def method
    @code = <<-'EOS'.strip_heredoc
    # クラス「Animal」を定義し、変数「dog」「cat」にインスタンスを格納してください

    # 変数「dog」「cat」をそれぞれputsしてください
    EOS

    @answer = <<-'EOS'.strip_heredoc
    # クラス「Animal」を定義し、変数「dog」「cat」にインスタンスを格納してください
    class Animal
    end

    dog = Animal.new
    cat = Animal.new

    # 変数「dog」「cat」をそれぞれputsしてください
    puts dog
    puts cat

    EOS
  end

  def if_input
  end

  def if
    @code = <<-'EOS'.strip_heredoc
    x = 111*111
    y = 66*66
    z = ""

    # xが12000より大きい場合に"変数xは12000より大きいです"とputsしてください


    # yが5000より大きい場合に"変数yは5000より大きいです"とputsしてください


    # zが空の文字列の場合に"変数zは空です"とputsしてください
    EOS

    @answer = <<-'EOS'.strip_heredoc
    x = 111*111
    y = 66*66
    z = ""

    # xが12000より大きい場合に"変数xは12000より大きいです"とputsしてください

    if (x > 12000)
      puts "変数xは12000より大きいです"
    end

    # yが5000より大きい場合に"変数yは5000より大きいです"とputsしてください

    if (y > 5000)
      puts "変数yは5000より大きいです"
    end

    # zが空の文字列の場合に"変数zは空です"とputsしてください

    if (z.empty?)
      puts "変数zは空です"
    end
    EOS
  end

  def for_input
  end

  def for
    @code = <<-'EOS'.strip_heredoc
    # 1から10までの数字をfor文で繰り返しputsしてください

    EOS

    @answer = <<-'EOS'.strip_heredoc
    # 1から10までの数字をfor文で繰り返しputsしてください
    for number in 1..10 do
      puts number
    end

    EOS
  end

  # 理解度確認テスト
end
