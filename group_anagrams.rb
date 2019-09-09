# Given an array of strings, group anagrams together.

# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
  strs.group_by { |s| s.chars.sort }.values.map(&:sort)
end

# hash = {}
# strs.each do |s|
#   key = s.split('').sort!.join
#   hash[key] = [] unless hash.keys.member?(key)
#   hash[key] << s
# end
# hash.values

p group_anagrams(%w[eat tea tan ate nat bat])
p group_anagrams(%w[cab tin pew duh may ill buy bar max doc])
